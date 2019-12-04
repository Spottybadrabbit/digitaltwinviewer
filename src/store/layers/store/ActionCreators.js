import * as LayerActionType from './ActionConstants';

/**
 * 创建更新道路流动图Action
 * @param {*} currentTime 
 */
export const updateRoadsTripsLayerAnimation=(currentTime)=>({
    type: LayerActionType.UPDATE_ROADTRIPSLAYER_ANIMATION,
    currentTime
});

export const updataFlowMapAnimationTimestamp=(currentTime)=>({
    type: LayerActionType.UPDATE_FLOWMAP_ANIMATION,
    currentTime
});

/**
 * 创建加载城市摄像头图层Action
 * @param {*} map 
 * @param {*} layerConfig 
 */
export const loadCityCameraLayerAction=(map,layerConfig)=>({
    type: LayerActionType.MAPBOX_LAYER_LOAD_CITYCAMERA,
    map,
    layerConfig
});

export const updateCityCongestionZoneIndexAction=(zoneH3Index)=>({
    type: LayerActionType.UPDATE_CITY_CONGESTION_ZONE_INDEX,
    value:zoneH3Index
})