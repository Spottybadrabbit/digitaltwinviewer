import echarts from 'echarts/lib/echarts';
import { fromJS } from 'immutable';
import * as ActionConstants from './ActionConstants';

/** 
 * 
 * @param {type,list} 
 * @return {*} Object
 */
const getContent = (type, list) => {
    let listAry = list.toJS();
    let firstItem = listAry.shift();
    listAry.push(firstItem);
    return {
        type,
        data: fromJS(listAry)
    }
}

/**
 * 
 * 创建Action
 * @param {type,list} 
 */
export const updateContent = (type, list) => {
    return getContent(type, list);
}

/**
 * 创建公交运行载荷情况Top10变化Action
 * @param {}   
 */
export const updateBusSort = () => {

    let listAry = [
        { name: '261路', value: 128, baseData: 200 },
        { name: '高新9号线', value: 126, baseData: 200 },
        { name: '高新6号线', value: 108, baseData: 200 },
        { name: '526路', value: 99, baseData: 200 },
        { name: '220路', value: 91, baseData: 200 },
        { name: '高新3号线', value: 87, baseData: 200 },
        { name: '184路', value: 85, baseData: 200 },
        { name: '707路', value: 78, baseData: 200 },
        { name: '32路', value: 76, baseData: 200 },
        { name: '旅游1号线', value: 66, baseData: 200 },
    ]

    listAry.forEach((item, index) => {
        let num = Math.floor(Math.random() * 100 + 80);
        item.value = num;
    })

    listAry.sort(function (a, b) {
        return b.value - a.value
    });

    return {
        type: ActionConstants.UPDATE_BUS_LOAD_TOP,
        data: listAry,
    }
}

/**
 * 创建重点区域路口人流、车流监测变化Action
 * @param {}   
 */
export const updateRoadFlowDetecte = () => {

    let dataAry = [
        ['石桥立交', 43, 50],
        ['丈八东路', 20, 30,],
        ['马腾空立交', 30, 65],
        ['社干路', 72, 53],
        ['南二环', 45, 18],
        ['文昌门', 30, 26],
        ['西影路', 29, 43],
        ['雁翎路', 46, 53],
        ['曲江大道', 32, 45],
        ['西部大道', 56, 53],
    ]

    dataAry.forEach((item, index) => {
        let num1 = Math.floor(Math.random() * 50 + 30);
        let num2 = Math.floor(Math.random() * 50 + 30);
        item[1] = num1;
        item[2] = num2;
    })

    let dataSource = [['type', '车流', '人流']].concat(dataAry);

    let option = {
        grid: {
            top: '15%',
            left: '10%',
            right: '5%',
        },
        dataset: {
            source: dataSource,
        },
        xAxis: {
            type: 'category',
            axisLabel: { color: '#FFF', fontSize: 12, rotate: 30, interval: 0 },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {  // x轴刻度的颜色
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: '百/小时',
            axisLabel: { color: '#FFF' },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {  // x轴刻度的颜色
                show: false
            },
            splitLine: {     //网格线
                show: false
            },
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: 'rgba(255, 204, 0, 0.82)' },
                                { offset: 0.6, color: 'rgba(255, 204, 0, 0.82)' },
                                { offset: 1, color: 'rgba(24, 42, 47, 0.7)' },
                            ]
                        ),
                        barBorderRadius: [10, 10, 10, 10]
                    },
                }
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: 'rgba(61, 145, 239, 0.82)' },
                                { offset: 0.6, color: 'rgba(61, 145, 239,0.82 )' },
                                { offset: 1, color: 'rgba(24, 42, 47, 0.7)' },
                            ]
                        ),
                        barBorderRadius: [10, 10, 10, 10]
                    },
                }
            },
        ]
    };

    return {
        type: ActionConstants.UPDATE_ROAD_FLOW_DETECTE,
        data: option
    }
}

/**
 * 创建重点区域事件统计变化Action
 * @param {}   
 */
export const updateEventCount = () => {
    let dataAry = [];
    let max = 400;
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 200 + 100);
        dataAry.push(num)
    }

    let option = {
        tooltip: {},
        legend: {
            top: '5%',
            right: 20,
            icon: 'circle',
            textStyle: {
                color: '#fff',
            },
            data: ['月事件数'],
        },
        color: ['#03FBFC'],
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: 'rgba(0,0,0,0)'
                }
            },
            indicator: [
                // { name: '可疑人员事件', axisLabel: { show: true }, max: max },
                { name: '可疑人员事件', max: max },
                { name: '车祸事件', max: max },
                { name: '严重拥堵事件', max: max },
                { name: '打架斗殴事件', max: max },
                { name: '违章车量超标事件', max: max },
            ],
            radius: '80%',
            center: ['50%', '56%'],
          
            splitLine: {
                lineStyle: {
                    color: 'rgba(68, 152, 190, 1)',
                }
            },
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(21,177,217,0.3)', 'rgba(21,177,217,0.7)']
                }
            },
        },
        series: [{
            type: 'radar',
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [
                {
                    value: dataAry,
                    name: '月事件数',
                    label: {
                        normal: {
                            show: true,
                            formatter: function (params) {
                                return params.value;
                            }
                        }
                    }
                }
            ]
        }]
    };

    return {
        type: ActionConstants.UPDATE_EVENT_COUNT,
        data: option
    }
}
