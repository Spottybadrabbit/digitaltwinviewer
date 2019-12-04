import { fromJS } from 'immutable';
import * as ActionConstants from './ActionConstants';

import testImg from '../../../../static/image/illegal_img.png';


const defaultState = fromJS({
    // 交通事故实时报警默认值
    trafficPoliceList: [
        {
            id: 0,
            name: '西部大道两车追尾事故',
            time: '2019-09-17 16:50:00',
            active: true
        },
        {
            id: 1,
            name: '高阳二路直行事故',
            time: '2019-09-17 16:50:00',
            active: false
        },
        {
            id: 2,
            name: '马腾空立交超车事故',
            time: '2019-09-17 16:50:00',
            active: true
        },
        {
            id: 3,
            name: '锦业一路左转三车追尾事故',
            time: '2019-09-17 16:50:00',
            active: false
        },
        {
            id: 0,
            name: '西部大道两车追尾事故',
            time: '2019-09-17 16:50:00',
            active: true
        },
        {
            id: 1,
            name: '高阳二路直行事故',
            time: '2019-09-17 16:50:00',
            active: false
        },
        {
            id: 2,
            name: '马腾空立交超车事故',
            time: '2019-09-17 16:50:00',
            active: true
        },
        {
            id: 3,
            name: '锦业一路左转三车追尾事故',
            time: '2019-09-17 16:50:00',
            active: false
        },
    ],
    // 当前事故处理默认值
    accidentDealObj: {
        accidentDealList: [
            {
                key: '事发时间',
                value: '2019-09-17 16:50:00'
            },
            {
                key: '事发地点',
                value: '马腾空立交'
            },
            {
                key: '事件等级',
                value: '三级'
            },
            {
                key: '处置方式',
                value: '等待报警电话'
            },
            {
                key: '视频回放',
                value: '是'
            },
            {
                key: '车主姓名',
                value: '张先生'
            },
            {
                key: '车主性别',
                value: '男'
            },
            {
                key: '联系电话',
                value: '13186029829'
            },
        ],
        image: testImg
    },
    // 月事故类型占比top 5
    accidentAccounted: [
        
    ],
    // 月事故高发路段
    accidentHeightOption: {},
    // 月事故类型占比
    accidentLevelOption: {},
    // 月事故车辆来源占
    accidentAccountedlist: [],
    // 事故车辆类型占比
    accidentCarTypeOption: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionConstants.UPDATE_TRAFFIC_ACCIDENT_TYPE:
            return state.set('accidentAccounted',action.data);
        case ActionConstants.UPDATE_TRAFFIC_ACCIDENT_HEIGHT:
            return state.set('accidentHeightOption', action.data);
        case ActionConstants.UPDATE_TRAFFIC_ACCIDENT_LEVEL:
            return state.set('accidentLevelOption', action.data)
        case ActionConstants.UPDATE_TRAFFIC_ACCIDENT_CAR_SOURCE:
            return state.set('accidentAccountedlist', action.data)
        case ActionConstants.UPDATE_TRAFFIC_ACCIDENT_CAR_TYPE:
            return state.set('accidentCarTypeOption', action.data)
        default:
            return state;
    }
}