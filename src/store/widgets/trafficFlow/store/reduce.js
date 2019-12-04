import { fromJS } from 'immutable';
import * as ActionConstants from './ActionConstants';


const defaultState = fromJS({
    //重大事件
    majorEventList: [{ name: '地铁三号线小寨站发生人员拥堵现象，请绕行' }, { name: '鱼化寨违建,严重影响城市形象' }, { name: '南三环发生车辆追尾事故,请保持车距' }],
    //道路概况默认值
    roadSummaryList: [
        {
            area: '莲湖区',
            outPercentage: '80%',
            enterPercentage: '30%',
        },
        {
            area: '高新区',
            outPercentage: '60%',
            enterPercentage: '40%',
        },
        {
            area: '雁塔区',
            outPercentage: '50%',
            enterPercentage: '50%',
        },
        {
            area: '长安区',
            outPercentage: '60%',
            enterPercentage: '40%',
        }
    ],
    //车牌类型
    licensePlate: {},
    //车辆类型
    carTypeOption: [],
    //拥堵变化默认值
    blockBarGradientOption: [],
    //车速
    carSpeedOption: {},
    //重点路口流量
    flowDeteCtionOption: {},
    //常见交通违规项目
    trafficViolationOption: {},
    //地铁实时流量监控
    subwayFlowOption: {},
});

export default (state = defaultState, action) => {
    switch (action.type) {
        //车牌类型        
        case ActionConstants.UPDATE_MAJOR_EVENT:
            return state.set('majorEventList', action.data);
        //车牌类型        
        case ActionConstants.UPDATE_LICENSE_PLATE:
            return state.set('licensePlate', action.data);
        //车辆类型     
        case ActionConstants.UPDATE_CAR_TYPE:
            return state.set('carTypeOption', action.data);
        //拥堵变化
        case ActionConstants.UPDATE_BLOCK_BAR_GRADIENT:
            return state.set('blockBarGradientOption', action.data);
        //车速变化
        case ActionConstants.UPDATE_CAR_SPEED:
            return state.set('carSpeedOption', action.data);
        //重点路口流量
        case ActionConstants.UPDATE_FLOW_DETECTION:
            return state.set('flowDeteCtionOption', action.data);
        //常见交通违规项目
        case ActionConstants.UPDATE_TRAFFIC_VIOLATION:
            return state.set('trafficViolationOption', action.data);
        //地铁实时流量监控
        case ActionConstants.UPDATE_SUBWAY_FLOW:
            return state.set('subwayFlowOption', action.data);
        default:
            return state;
    }
}