import React,{Component,Fragment} from 'react';
import {StaticMap} from 'react-map-gl';
import {LightingEffect} from '@deck.gl/core';
import DeckGL from 'deck.gl';
import {MapboxLayer} from '@deck.gl/mapbox';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import HeadBgImg from './static/image/head_img.png';
//全局配置对象
import config from './config';
//系统事件类型
import * as AppEvent from './core/AppEvent';
//事件管理器
import EventManager from './core/managers/EventManager';
//地图管理器
import MapManager from './core/managers/MapManager';
//事件模拟器
import SimulatorManager from './core/managers/SimulatorManager';
//组件管理器对象
import WidgetManager from './core/managers/WidgetManager';
//环境创建对象
import {createSceneAmbientLight,createScenePointLight} from './utils/EnvironmentCreator';
//基础图层创建工厂对象
import BaseLayerCreatorFactory from './support/factory/BaseLayerCreatorFactory';
//图层操作Action
import {LayerActionCretors} from './store/layers/store';
//widget操作Action
import {WidgetActionCretors} from './store/dashboard/store';
//图层渲染框架
import {LayerFrameworkType} from './support/others/LayerInfos';
//摄像机控制器
import CameraController from './support/controller/CameraController';
//组件创建器
import WigdetUIElementsCreator from './support/creators/widget/WigdetUIElementsCreator';

//场景环境光
let ambientLightOptions=config.environment.lights.ambientlight;
const ambientLight = createSceneAmbientLight(ambientLightOptions);

//场景中心点光源
let centerPointLightOptions= config.environment.lights.pointlights.filter((item)=>{
    return item.id === "center";
});
const pointLight = createScenePointLight(centerPointLightOptions[0]);

//光源效果对象
const lightingEffect = new LightingEffect({ambientLight,pointLight});

//MapBox访问令牌
const MAPBOX_TOKEN = config.viewpoint.accessToken;

//地图初始化范围
const INITIAL_VIEW_STATE = {
    longitude: config.viewpoint.center[0],
    latitude: config.viewpoint.center[1],
    zoom: config.viewpoint.zoom,
    bearing: config.viewpoint.bearing,
    pitch: config.viewpoint.pitch,
    maxBounds: config.viewpoint.bounds
};

//初始化需要渲染的DeckGL图层
let initializeRenderLayers=[];
//记录从其它业务模块传递的DeckGL图层
let otherRenderLayers=[];
//相机视角控制器
let cameraController;

let map;
let deck;

/**
 * 地图视图组件
 * 承载底图、基础可视化图层
 */
class MapViewer extends Component{
    state = {};
    constructor(){
        super();
        //注册地图初始化行为
        MapManager.initListeners();
        //加载初始化需要渲染的DeckGL图层
        //this._loadDeckGLLayerInit();
        //监听动态添加DeckGL图层事件
        EventManager.addEventListener(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS,this._dynamicLoadDeckGLLayers.bind(this));
        //监听动态移除DeckGL图层事件
        EventManager.addEventListener(AppEvent.MAP_DYNAMIC_REMOVE_DECK_LAYERS,this._dynamicRemoveDeckGLLayers.bind(this));
        //监听界面组件父容器创建
        EventManager.addEventListener(AppEvent.WIDGET_DASHBOARD_PARENT_CONTAINER,this._createCharts4Parents.bind(this));

        EventManager.addEventListener(AppEvent.BUILDING_GLTF_YHGJ_ADD,this._add3DBuildingYhgjLayer.bind(this));
        EventManager.addEventListener(AppEvent.ARC_LAYER_ADD,this._addDeckLayer.bind(this));
        EventManager.addEventListener(AppEvent.MAP_3D_MODELS_YHGJ_EMIT, this._map3DModelsYHGJEmit.bind(this))
        EventManager.addEventListener(AppEvent.MAP_3D_MODELS_YHGJ_7FLOOR_EMIT, this._map3DModelsYHGJ7FloorEmit.bind(this))
    }

    _addDeckLayer(layer){
        otherRenderLayers.push(layer);
        // console.log(otherRenderLayers);
        this._renderLayers();
    }

    _add3DBuildingYhgjLayer(){
        map.removeLayer('mapbox-scenegraphLayer-build')
    }
    _map3DModelsYHGJEmit(scenegraph) {
        console.log(scenegraph);
        // console.log(map);
        EventManager.dispatchEvent(AppEvent.MAP_3D_MODELS_YHGJ,{scenegraph, map})

    }
    _map3DModelsYHGJ7FloorEmit(scenegraph) {
        console.log(scenegraph)
        EventManager.dispatchEvent(AppEvent.MAP_3D_MODELS_YHGJ_7FLOOR, {scenegraph, map})
    }
    /**
     * 动态加载Deck图层
     * @param {*} layers 
     */
    _dynamicLoadDeckGLLayers(layers){
        if(Array.isArray(layers)){
            layers.forEach((layer)=>{
                otherRenderLayers.push(layer);
            });
        }
        else{
            otherRenderLayers.push(layers);
        }
        this._renderLayers();
    }

    /**
     * 动态移除Deck图层
     * @param {*} layersIDS 
     */
    _dynamicRemoveDeckGLLayers(layersIDS){

    }

    /**
     * 为界面父容器创建图表内容
     * @param {*} parentContainer 
     */
    _createCharts4Parents(parentContainers){
        //渲染父元素
        parentContainers.widgets.forEach((container)=>{
            this.props.loadUIWidget(container);
        });
        //为父元素创建内容
        WigdetUIElementsCreator.appendChildChartElement(parentContainers);
    }

    /**
     * 动画处理
     */
    _animate() {
        //道路流动动画
        const loopLength = 4000;
        const animationSpeed = 100;
        const timestamp = Date.now()/450;
        const loopTime = loopLength / animationSpeed;
        const flowmapTime=(((Date.now() / 1000) % 60) / 60) * 1800;
        const currentTime=((timestamp % loopTime) / loopTime) * loopLength;
        this.props.updataRoadsTripsLayerAnimation(currentTime);
        this.props.updataFlowMapAnimationTimestamp(flowmapTime);
        this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
    }

    /**
     * 初始化Deck.glMapBox.gl上下文
     */
    _onWebGLInitialized = (gl) => {
        this.setState({gl});
    }

    /**
     * 
     */
    _loadDeckGLLayerInit(){
        let deckglLayers= config.layers.baselayers.filter((item)=>{
            return (item.framework === LayerFrameworkType.DECK || item.framework === LayerFrameworkType.FLOWMAP)
        });
        let layer;
        for(let index=0;index<deckglLayers.length;index++){
            layer=deckglLayers[index];
            initializeRenderLayers.push(BaseLayerCreatorFactory.createLayer.bind(this)(layer,this._map,this._deck));
        }
    }

    /**
     * 注册并出发事件
     */
    _registerAndTrigger(){
        //获取需要触发的事件参数
        const eventParmeters=SimulatorManager.findTriggerEventParmeters();
         //注册场景模拟事件
        eventParmeters.forEach((parmeter)=>{ 
            //注册事件回调处理函数
            SimulatorManager.registerSimulateEvents.bind(this)(parmeter.eventName);
            //触发事件
            setTimeout(()=>{
                SimulatorManager.triggerEvent(parmeter.eventName,{
                    simulator:parmeter,
                    map:map,
                    deck:deck,
                    this:this
                });
            },1000);
        });
        //根据模拟场景获取对应UI Widget ID
        const widgetIds=SimulatorManager.fetchTargetParmeters(eventParmeters,'id');
        //获取UI Widget配置项
        const widgetsConfig= WidgetManager.findTriggerWidgetsParmeters(widgetIds);
        //创建Widgets
        WigdetUIElementsCreator.createElements(widgetsConfig);
        map.on('click',function name(params) {
            console.dir(params); 
        });
    }

    /**
     * 地图加载完成回调
     */
    _onMapLoad = () => {
        map = this._map;
        deck = this._deck;
        this._registerAndTrigger();
        cameraController=new CameraController(this._map);
        this._animate();
        if(config.viewpoint.autoRotate){
            this._sceneCameraRoate();
        }
        //本地化地图注记层
        EventManager.dispatchEvent(AppEvent.MAP_LABEL_LANGUAGE,{config,map,mapboxgl});
        //加载业务图层
        EventManager.dispatchEvent(AppEvent.MAP_OPERATIONLAYER_LOAD,{config,map});
        //加载3D精细化模型
        EventManager.dispatchEvent(AppEvent.MAP_3D_MODELS_LOAD,{config,map});
        //加载三维城市场景
        map.addLayer(new MapboxLayer({id: 'buildings', deck}));
        this._map.on('mousemove',(e)=>{
            console.dir(e);
        });
        // console.dir(map.getLayer('3d-model'));


        // EventManager.dispatchEvent(AppEvent.MAP_3D_MODELS_YHGJ,{config, map})
        
    }

    _sceneCameraRoate(){
        cameraController.rotateAtPoint(0);
    }

    /**
     * 加载基础图层
     */
    _renderLayers(){
        let renderLayers=[];
        let deckglLayers= config.layers.baselayers.filter((item)=>{
            return (item.framework === LayerFrameworkType.DECK || item.framework === LayerFrameworkType.FLOWMAP)
        });
        let layer;
        for(let index=0;index<deckglLayers.length;index++){
            layer=deckglLayers[index];
            renderLayers.push(BaseLayerCreatorFactory.createLayer.bind(this)(layer,this._map,this._deck));
        }
        if(otherRenderLayers.length > 0){
            otherRenderLayers.forEach((layer)=>{
                renderLayers.push(layer);
            });
        }
        return renderLayers;
    }

    render(){
        const {gl} = this.state;
        return (
            <Fragment>
                {/* <header style={{
                    zIndex: 999,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${80*100/1080}vh`,
                    lineHeight:`${80*100/1080}vh`,
                    background: `url(${HeadBgImg}) no-repeat center center` ,
                    backgroundSize:'100% 100%',
                    textAlign:'center',
                    color:'#00FFFF',
                    padding:0,
                    margin:0,
                    fontSize:22
                }}>{config.title}</header> */}
                <DeckGL
                    ref={ref => { this._deck = ref && ref.deck; }}
                    layers={this._renderLayers()}
                    effects={[lightingEffect]}
                    initialViewState={INITIAL_VIEW_STATE}
                    controller={true}
                    onWebGLInitialized={this._onWebGLInitialized}>
                    {gl && (
                        <StaticMap
                            ref={ref => {
                                this._map = ref && ref.getMap();
                            }}
                            gl={gl}
                            mapStyle={config.viewpoint.default_style}
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            onLoad={this._onMapLoad}>
                            {
                                this.props.loadWidgetsList.map((Widget) => {
                                    return <Widget key={Widget.attrs[0].id}></Widget>
                                })
                            }
                        </StaticMap>
                    )}</DeckGL>
            </Fragment>
        );
    }
}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps=(state)=>{
    return {
        roadsTripsAnimationTimestamp:state.getIn(['layer', 'RoadsTripsLayerAnimationFrameTime']),
        flowMapAnimationTimestamp:state.getIn(['layer', 'FlowMapAnimationTimestamp']),
        loadWidgetsList:state.getIn(['widget','LoadedUIWidgets']),
        cityCongestionZoneExtruded: state.getIn(['layer', 'cityCongestionZoneExtruded']),
        cityCongestionZoneIndex: state.getIn(['layer', 'cityCongestionZoneIndex']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps=(dispatch)=>{
    return {
        updataRoadsTripsLayerAnimation(currentTime){
            dispatch(LayerActionCretors.updateRoadsTripsLayerAnimation(currentTime));
        },
        updataFlowMapAnimationTimestamp(currentTime){
            dispatch(LayerActionCretors.updataFlowMapAnimationTimestamp(currentTime));
        },
        loadUIWidget(widget){
            dispatch(WidgetActionCretors.loadUIWidget(widget));
        },
        updateCityCongestionZoneIndex(zoneH3Index){
            dispatch(LayerActionCretors.updateCityCongestionZoneIndexAction(zoneH3Index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MapViewer);