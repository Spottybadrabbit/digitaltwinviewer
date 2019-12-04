//图层Framework类型
import {LayerFrameworkType} from '../others/LayerInfos';
import DeckGLLayerCreatorFactory from './DeckGLLayerCreatorFactory';
import MapboxLayerCreator from '../creators/layers/MapboxLayerCreator';
import FlowMapLayerCreator from '../creators/layers/FlowMapLayerCreator'

/**
 * 图层渲染机制工厂类
 */
export default class BaseLayerCreatorFactory{

    /**
     * 创建各类型图层
     * @param {*} layerFramework 
     * @param {*} layer 
     */
    static createLayer(layer,map,deck){
        /**
         * 添加Deck.gl图层
         */
        if(layer.framework === LayerFrameworkType.DECK && layer.isLoad){
            return DeckGLLayerCreatorFactory.createDeckLayer.bind(this)(layer,deck);
        }

        /**
         * 添加Mapbox图层
         */
        if(layer.framework === LayerFrameworkType.MAPBOX){
            MapboxLayerCreator.createMapboxLayer(layer,map);
        }

        if(layer.framework === LayerFrameworkType.WEBGL){

        }

        /**
         * 添加FlowMap图层
         */
        if(layer.framework === LayerFrameworkType.FLOWMAP && layer.isLoad){
            return FlowMapLayerCreator.createFlowLayer.bind(this)(layer);
        }
    }
}