import { fromJS } from 'immutable';
import * as ActionConstants from './ActionConstants';

const defaultState = fromJS({
    // 违法类型top5
    IllefalTypeTopList: [],
    // 事故车辆类型占比
    IllegalTypeAccoundOption: {},
    // 违法时间高发路段分布
    IllegalTimeOption: {},
    // 行人
    IllegapeopleList:[],
    // 非机动车
    IllegNomotorVehicleList:[],
    // 近七天违法趋势
    IllegalTrendOption: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionConstants.UPDATA_ILLEGAL_Type_TOP5:
            return state.set('IllefalTypeTopList', action.data);
        case ActionConstants.UPDATA_ILLEGAL_Type_ACCOUNTED:
            return state.set('IllegalTypeAccoundOption', action.data);
        case ActionConstants.UPDATA_ILLEGAL_Time:
            return state.set('IllegalTimeOption', action.data)
        case ActionConstants.UPDATA_ILLEGAL_PEOPLE:
            return state.set('IllegapeopleList',action.data);
        case ActionConstants.UPDATA_ILLEGAL_NOMOTOR_VEHICLE:
            return state.set('IllegNomotorVehicleList', action.data);
        case ActionConstants.UPDATA_ILLEGAL_TREND:
            return state.set('IllegalTrendOption', action.data);
        default:
            return state;
    }
}