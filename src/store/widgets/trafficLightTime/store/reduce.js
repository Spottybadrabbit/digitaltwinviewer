import { fromJS } from 'immutable';
import * as ActionConstants from './ActionConstants';


const roadListAry = [
    {
        name: '浐河东路/G108（路口',
        accessTime: '51s',
        queueLength: '65m',
        status: '正常',
    },
    {
        name: '产业一路/Y222（路口',
        accessTime: '73s',
        queueLength: '36m',
        status: '正常',
    },
    {
        name: '东关南街/卧龙巷（路口）',
        accessTime: '73s',
        queueLength: '38m',
        status: '预警',
    },
    {
        name: '丰登东路/丰登南路（路口）',
        accessTime: '56s',
        queueLength: '69m',
        status: '预警',
    },
    {
        name: '光辉巷/北大街（路口',
        accessTime: '78s',
        queueLength: '33m',
        status: '正常',
    },
    {
        name: '姜白路/小寨二路（路口',
        accessTime: '71s',
        queueLength: '39m',
        status: '正常',
    },
    {
        name: '科技五路/高新一路（路口）',
        accessTime: '51s',
        queueLength: '65m',
        status: '预警',
    },
    {
        name: '爱学路/金花南路（路口）',
        accessTime: '53s',
        queueLength: '16m',
        status: '正常',
    },
    {
        name: '创新大道/科技路（路口）',
        accessTime: '54s',
        queueLength: '64m',
        status: '预警',
    },
    {
        name: '太白北路/太白路（路口）',
        accessTime: '45s',
        queueLength: '38m',
        status: '正常',
    },
    {
        name: '太白南路/G108（路口）',
        accessTime: '61s',
        queueLength: '5m',
        status: '正常',
    },
    {
        name: '文艺路/环村路（路口）',
        accessTime: '35s',
        queueLength: '65m',
        status: '预警',
    },
    {
        name: '西影路/红星商业街（路口）',
        accessTime: '41s',
        queueLength: '65m',
        status: '预警',
    },
    {
        name: '友谊东路/经九路（路口）',
        accessTime: '53s',
        queueLength: '67m',
        status: '预警',
    },
    {
        name: '德福琶/湘子庙街（路口）',
        accessTime: '55s',
        queueLength: '69m',
        status: '正常',
    },
    {
        name: '胜利街/火车站东侧（路口）',
        accessTime: '51s',
        queueLength: '65m',
        status: '正常',
    },
    {
        name: '大学东路/朱雀大街（路口）',
        accessTime: '61s',
        queueLength: '55m',
        status: '正常',
    },
    {
        name: '关中环线/子午大道（路口）',
        accessTime: '56s',
        queueLength: '66m',
        status: '预警',
    },
    {
        name: '含光路/含光路环岛（路口）',
        accessTime: '54s',
        queueLength: '55m',
        status: '正常',
    },
    {
        name: '人民西路/迎宾大道（路口）',
        accessTime: '58s',
        queueLength: '68m',
        status: '预警',
    },
    {
        name: '太乙立交/二环南路东（路口）',
        accessTime: '51s',
        queueLength: '65m',
        status: '正常',
    },
    {
        name: '半岛南一路/浐河东路（路口）',
        accessTime: '52s',
        queueLength: '65m',
        status: '预警',
    },
    {
        name: '农林巷/长安南路（路口）',
        accessTime: '56s',
        queueLength: '65m',
        status: '预警',
    },
    {
        name: '阿房路/阿房四路（路口）',
        accessTime: '42s',
        queueLength: '46m',
        status: '正常',
    },
    {
        name: '锦业路/丈八六路（路口）',
        accessTime: '25s',
        queueLength: '36m',
        status: '正常',
    },
    {
        name: '西三环/天谷八路（路口）',
        accessTime: '37s',
        queueLength: '43m',
        status: '预警',
    }, {
        name: '高新路/科技二路（路口）',
        accessTime: '34s',
        queueLength: '45m',
        status: '正常',
    }, {
        name: '科技六路/团结南路（路口）',
        accessTime: '37s',
        queueLength: '48m',
        status: '预警',
    },
    {
        name: '唐延路/科技路（路口）',
        accessTime: '35s',
        queueLength: '43m',
        status: '预警',
    }
];

const defaultState = fromJS({
    roadListAry: roadListAry,
    //仪表盘
    performanceGauge: [],
    count: 999,
    //路口队列长度
    queueLengthOption: {},
    //路口直行速度
    straightSpeedOption: {},
    //路口转弯侧速度
    turnSpeedOption: {},

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionConstants.UPDATE_ROAD_LIST:
            return state.set('roadListAry', action.data);
        case ActionConstants.UPDATE_PERFORMANCE_GAUGE:
            return state.set('performanceGauge', action.data).set('count', action.count);
        case ActionConstants.UPDATE_QUEUE_LENGTH:
            return state.set('queueLengthOption', action.data);
        case ActionConstants.UPDATE_STRAIGHT_SPEED:
            return state.set('straightSpeedOption', action.data);
        case ActionConstants.UPDATE_TURN_SPEED:
            return state.set('turnSpeedOption', action.data);
        default:
            return state;
    }
}