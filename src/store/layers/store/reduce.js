import { fromJS } from 'immutable';
import * as LayerActionType from './ActionConstants';

const defaultState=fromJS({
    //道路轨迹图层每帧动画时间轴
    RoadsTripsLayerAnimationFrameTime:0,
    FlowMapAnimationTimestamp:0,
    //城市拥堵区域热力图是否以三维形式展示
    cityCongestionZoneExtruded: false,
    //城市拥堵路段区域空间索引
    cityCongestionZoneIndex:[]
});

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
const updateRoadsTripsLayerAnimation = (state, action) => {
	return state.set('RoadsTripsLayerAnimationFrameTime',action.currentTime);
};

const updateFlowMapLayerAnimation=(state, action)=>{
    return state.set('FlowMapAnimationTimestamp',action.currentTime);
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
const updateCityCongestionZoneIndex=(state, action)=>{
    return state.set('cityCongestionZoneIndex',state.get('cityCongestionZoneIndex').concat(action.value));
}

/**
 * 更新道路交通流动图
 */
export default (state=defaultState,action)=>{
    switch(action.type){
        case LayerActionType.UPDATE_ROADTRIPSLAYER_ANIMATION:
            return updateRoadsTripsLayerAnimation(state,action);
        case LayerActionType.UPDATE_CITY_CONGESTION_ZONE_INDEX:
            return updateCityCongestionZoneIndex(state,action);
        case LayerActionType.UPDATE_FLOWMAP_ANIMATION:
            return updateFlowMapLayerAnimation(state,action);
        default:
            return state;
    }
}