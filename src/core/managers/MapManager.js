import MapboxLanguage from '@mapbox/mapbox-gl-language';
import * as AppEvent from '../AppEvent';
import EventManager from '../managers/EventManager';
import BaseLayerCreatorFactory from '../../support/factory/BaseLayerCreatorFactory';
import IOC3dModelsLayer from '../../layers/IOC3dModelsLayer';

const _mapLanguageHandler = (data) => {
    data.mapboxgl.setRTLTextPlugin(data.config.viewpoint.language_script);
    data.map.addControl(new MapboxLanguage({
        defaultLanguage: 'zh'
    }));
}

const _mapoperationLayersLoadHandler = (data) => {
    //从配置文件中读取framework类型是mapbox得加载项
    let mapboxLayers = data.config.layers.operationlayers.filter((item) => {
        return item.isLoad;
    });
    mapboxLayers.forEach((layer) => {
        BaseLayerCreatorFactory.createLayer(layer, data.map);
    });
}

const _map3DModelsLoadHandler = (data) => {
    //加载重要地标三维模型
    let modelsOptions = data.config.environment.models3D.landmarks.filter((item) => {
        // console.log(item)

        return item.isImmediate;
    });
    // console.log(data)
    // console.log(modelsOptions)

    let modelLayer = new IOC3dModelsLayer(data.map);
    modelLayer.addModelToMap(modelsOptions);
    // console.log(modelLayer)

}


const _map3DModelYHGJ = (data) => {

    // console.log(data)
    let scenegraphLayer = data.scenegraph.filter((item) => {
        // console.log(item)
        return item.id === 'mapbox-scenegraphLayer-build'
    })
    console.log(scenegraphLayer)
    let yhgjModel = new IOC3dModelsLayer(data.map)
    yhgjModel.addModelyhgj(scenegraphLayer)


}


const _map3DModelYHGJ7Floor = (data) => {

    // console.log(data)
    let scenegraphLayer = data.scenegraph.filter((item) => {
        // console.log(item)
        return item.id === 'scenegraphLayer-7floor'
    })
    console.log(scenegraphLayer)
    let yhgjModel = new IOC3dModelsLayer(data.map)
    yhgjModel.addModelyhgj7Floor(scenegraphLayer)


}
/**
 * 地图对象管理器
 */
export default class MapManager {

    static initListeners() {
        EventManager.addEventListener(AppEvent.MAP_LABEL_LANGUAGE, _mapLanguageHandler);
        EventManager.addEventListener(AppEvent.MAP_OPERATIONLAYER_LOAD, _mapoperationLayersLoadHandler);
        EventManager.addEventListener(AppEvent.MAP_3D_MODELS_LOAD, _map3DModelsLoadHandler);
        EventManager.addEventListener(AppEvent.MAP_3D_MODELS_YHGJ, _map3DModelYHGJ)
        EventManager.addEventListener(AppEvent.MAP_3D_MODELS_YHGJ_7FLOOR, _map3DModelYHGJ7Floor)
    }
}
