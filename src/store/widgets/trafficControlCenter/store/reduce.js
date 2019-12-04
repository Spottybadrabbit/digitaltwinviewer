import { fromJS } from 'immutable';
import * as ActionConstants from './ActionConstants';
import suspicious_img1 from '../../../../static/image/suspicious_img1.png';
import suspicious_img2 from '../../../../static/image/suspicious_img2.png';
import violation_img1 from '../../../../static/image/violation_img1.png';
import violation_img2 from '../../../../static/image/violation_img2.png';
import accident_img1 from '../../../../static/image/accident_img1.png';
import accident_img2 from '../../../../static/image/accident_img2.png';

const suspiciousPeople = [{
    addr: '太白南路路口',
    time: '16:50:00',
    action: '是',
    status: '待定',
    img: suspicious_img1,
    suspiciousPeople: {
        name: '张三',
        sex: '男',
        age: '32',
        dataSource: '公安',
        IDNumber: '6101111988030311XX',
        dangerLevel: '1',
    }
},
{
    addr: '沣惠南路路口',
    time: '18:36:10',
    action: '是',
    status: '待定',
    img: suspicious_img2,
    suspiciousPeople: {
        name: '王丽',
        sex: '女',
        age: '48',
        dataSource: '公安',
        IDNumber: '6101111988030312XX',
        dangerLevel: '2',
    }
}];

const violationCar = [{
    addr: '锦业路西三环路口',
    time: '16:53:02',
    action: '是',
    status: '待定',
    img: violation_img1,
    congestionIndex: 30,
},
{
    addr: '高新路科技二路口',
    time: '13:05:30',
    action: '是',
    status: '待定',
    img: violation_img2,
    congestionIndex: 30,
}];

const trafficAccident = [
    {
        addr: '丈八东路路口',
        time: '12:30:50',
        action: '是',
        status: '待定',
        img: accident_img1,
        congestionIndex: 36,
    },
    {
        addr: '人民西路迎宾大道路口',
        time: '16:26:50',
        action: '否',
        status: '待定',
        img: accident_img2,
        congestionIndex: 48,
    }
]

const defaultState = fromJS({
    //检测到可疑人员    
    suspiciousPeople,
    //违章车辆数量超过阈值
    violationCar,
    //检测到车祸发生
    trafficAccident,
    //公交运行载荷情况Top10  
    busTopList: [],
    //重点区域路口人流、车流监测
    roadFlowDetectionOption: {},
    //重点区域事件统计  
    eventCountOption: {},
});

export default (state = defaultState, action) => {
    switch (action.type) {
        //检测到可疑人员     
        case ActionConstants.UPDATE_SUSPICIOUS_PEOPLE:
            return state.set('suspiciousPeople', action.data);
        //违章车辆数量超过阈值
        case ActionConstants.UPDATE_VIOLATION_CAR:
            return state.set('violationCar', action.data);
        //检测到车祸发生
        case ActionConstants.UPDATE_BUS_TRAFFIC_ACCIDENT:
            return state.set('trafficAccident', action.data);
        //公交运行载荷情况Top10     
        case ActionConstants.UPDATE_BUS_LOAD_TOP:
            return state.set('busTopList', action.data);
        //重点区域路口人流、车流监测      
        case ActionConstants.UPDATE_ROAD_FLOW_DETECTE:
            return state.set('roadFlowDetectionOption', action.data);
        //重点区域事件统计    
        case ActionConstants.UPDATE_EVENT_COUNT:
            return state.set('eventCountOption', action.data);
        default:
            return state;
    }
}