import {PolygonLayer,TripsLayer,IconLayer,PathLayer,ScenegraphLayer} from 'deck.gl';
import {registerLoaders} from '@loaders.gl/core';
import {GLTFScenegraphLoader} from '@luma.gl/addons';
//全局配置对象
import config from '../../config';
//环境创建对象
import {createBuildingsMaterial} from '../../utils/EnvironmentCreator';
//图层Framework类型
import {LayerVisualizationObject} from '../others/LayerInfos';

import * as AppEvent from '../../core/AppEvent';
import EventManager from '../../core/managers/EventManager';

import {PhongMaterial} from '@luma.gl/core';

const material =  new PhongMaterial({
  ambient: 0.2,
  diffuse: 0.5,
  shininess: 32,
  specularColor: [255, 255, 255]
});


//建筑物渲染材质
let buildingMaterialOptions= config.environment.materials.filter((item)=>{
    return item.id === "building";
});
const buildingsMaterial = createBuildingsMaterial(buildingMaterialOptions[0]);

registerLoaders([GLTFScenegraphLoader]);

const ANIMATIONS = {
    '*': {
          speed: 1,
          playing: true,
    }
};

/**
 * 创建DeckGL图层工厂类
 */
export default class DeckGLLayerCreatorFactory{

    /**
     * Decl图层对象创建
     * @param {*} layerOptions 
     */
    static createDeckLayer(layerOptions,deck){
        let layerObject;
        switch (layerOptions.type){
            //三维建筑物图层
            case LayerVisualizationObject.BUILDINGS:
                let extrudedField=layerOptions.extrudedField;
                layerObject= new PolygonLayer({
                    id: layerOptions.id,
                    data: layerOptions.data,
                    extruded: layerOptions.extruded,
                    wireframe: layerOptions.wireframe,
                    opacity: layerOptions.opacity,
                    getPolygon: f => f.geometry.coordinates[0][0],
                    getElevation: f => f.properties[extrudedField],
                    getFillColor: layerOptions.getFillColor,
                    buildingsMaterial
                })
                break;
                //道路流动渲染图层
                case LayerVisualizationObject.CITYROADS:
                        layerObject=new TripsLayer({
                            id: 'cityroads',
                            data: layerOptions.data,
                            getPath: d => d.segments,
                            getColor: d => (d.vendor === 0 ? [255,140,0] : d.vendor===1 ? [249,27,109]:[0,255,127]),
                            opacity: layerOptions.opacity,
                            widthMinPixels: layerOptions.widthMinPixels,
                            rounded: layerOptions.rounded,
                            trailLength:layerOptions.trailLength,
                            currentTime: this.props.roadsTripsAnimationTimestamp
                        })
                break;
                case LayerVisualizationObject.ICON:
                    layerObject=new IconLayer({
                        id: layerOptions.id,
                        data: layerOptions.data,
                        pickable: layerOptions.pickable,
                        iconAtlas: layerOptions.iconAtlas,
                        iconMapping: layerOptions.iconMapping,
                        getIcon: layerOptions.getIcon,
                        getPosition: d => d.geometry.coordinates,
                        getSize: layerOptions.getSize,
                        sizeScale: layerOptions.sizeScale
                    });
                    break;
                case LayerVisualizationObject.PATH:
                    layerObject=new PathLayer({
                        id: layerOptions.id,
                        data: layerOptions.data,
                        pickable: layerOptions.pickable,
                        widthScale: layerOptions.widthScale,
                        widthMinPixels: layerOptions.widthMinPixels,
                        getPath: layerOptions.getPath,
                        getColor:layerOptions.getColor,
                        getWidth: layerOptions.getWidth,
                        opacity: layerOptions.opacity
                    });
                    break;
                case LayerVisualizationObject.SCENEGRAPH:
                    layerObject=new ScenegraphLayer({
                        id: layerOptions.id,
                        data: layerOptions.data,
                        scenegraph: layerOptions.scenegraph,
                        _animations: ANIMATIONS,
                        //getColor:layerOptions.getColor,
                        getScale: layerOptions.getScale,
                        sizeScale: layerOptions.sizeScale,
                        getOrientation: layerOptions.getOrientation,
                        material
                    });
                    break;
                    case LayerVisualizationObject.POLYGON:
                            layerObject= new PolygonLayer({
                                id: 'important-zone',
                                data: layerOptions.data,
                                extruded: layerOptions.extruded,
                                wireframe: layerOptions.wireframe,
                                opacity: layerOptions.opacity,
                                getPolygon: f => f.geometry.coordinates[0][0],
                                getFillColor: [127,255,170]
                            })
                        break;
               default:
               // eslint-disable-next-line no-throw-literal
               throw "未匹配的渲染图层对象，请检查配置文件是否正确配置!"; 
        }
        if(layerOptions.hasOwnProperty('isOperate') && layerOptions.isOperate){
            EventManager.dispatchEvent(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS,layerObject);
        }
        return layerObject;
    }
}