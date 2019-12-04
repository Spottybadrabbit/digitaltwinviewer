import * as ActionConstants from './ActionConstants';
import { fromJS } from 'immutable';

/**
 * 创建路口Action
 * @param {} 
 */
export const updateRoad = (list) => {    
    let roadListAry=list.toJS();
    let firstItem = roadListAry.shift();
    roadListAry.push(firstItem); 
    return {
        type: ActionConstants.UPDATE_ROAD_LIST,
        data: fromJS(roadListAry)
    }
}
/**
 * 创建仪表盘Action
 * @param {} 
 */
export const updatePerformanceGauge = (count) => {

    let value1 = Math.random().toFixed(1); // 值，0~1之间优化前
    let value2 = Math.random().toFixed(1); // 值，0~1之间优化后
    let dateAry = [value1, value2];
    let typeAry = ['优化前','优化后']
    let value3 = count;
    let startAngle = 225; // 开始角度
    let endAngle = -45; // 结束角度   
    let pointerAngle1 = (startAngle - endAngle) * (1 - value1) + endAngle; //优化前当前指针（值）角度 
    let pointerAngle2 = (startAngle - endAngle) * (1 - value2) + endAngle; //优化后当前指针（值）角度
    let pointerAngleAry = [pointerAngle1, pointerAngle2];
    let colorAry = [[
        [0, 'rgba(248 ,205 ,3)'], [1, 'rgba(248 ,205 ,3)']
    ], [
        [0, 'rgba(37 ,255 ,242)'], [1, 'rgba(37 ,255 ,242)']
    ]];
    let optionAry = [];
    for (let i = 0; i < 2; i++) {
        let option = {
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            series: [
                {
                    name: '圆心',
                    type: "gauge",
                    radius: "1%", //仪表大小
                    z: 5,
                    splitNumber: 1,
                    startAngle: 350, //开始角度
                    endAngle: -9.9, //结束角度
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: '100%',
                            color: [[0.33, '#1B1B1B'], [0.66, '#1B1B1B'], [1, '#1B1B1B']],
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: { //指针样式
                        length: '45%'
                    },
                    detail: {
                        show: false
                    }
                },
                {
                    name: typeAry[i],
                    type: 'gauge',
                    z: 4,
                    min: 0,
                    max: 1,
                    splitNumber: 6,
                    radius: '85%',
                    startAngle: 225,//默认开始角度
                    endAngle: -45, //默认结束角度
                    axisLine: {            // 坐标轴线
                        show: false,
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: '#FFFFFF',
                        }
                    },
                    splitLine: {    // 分隔线
                        show: true,
                        length: 10,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#FFFF00'
                        }
                    },
                    axisLabel: {
                        show: false,
                        backgroundColor: 'auto',
                        borderRadius: 2,
                        color: '#eee',
                        padding: 3,
                        textShadowBlur: 2,
                        textShadowOffsetX: 1,
                        textShadowOffsetY: 1,
                        textShadowColor: '#222'
                    },
                    pointer: {
                        length: '50%',
                        width: 5
                    },
                    itemStyle: {
                        color: '#07B9FF'
                    },
                    title: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'PingFang SC',
                        fontWeight: 'bold',
                        offsetCenter: [0, -20],
                    },
                    detail: {
                        width: 100,
                        fontSize: '24',
                        color: '#FFF',
                        fontFamily: 'PingFang SC',
                        fontWeight: 'bold',
                        formatter: function (value) {
                            return value * 100 + '%';
                        }
                    },
                    data: [{ value: dateAry[i], name: typeAry[i] }]
                },
                {
                    name: '进度',
                    type: "gauge",
                    radius: "65%", //仪表大小
                    z: 3,
                    splitNumber: 1,
                    startAngle: 225, //开始角度
                    endAngle: pointerAngleAry[i], //结束角度                    
                    axisLine: {
                        show: true,
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: colorAry[i],
                            width: 8,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                },
                {
                    name: '进度条',
                    type: "gauge",
                    radius: "65%", //仪表大小
                    z: 2,
                    splitNumber: 1,
                    startAngle: 225,//默认开始角度
                    endAngle: -45, //默认结束角度
                    axisLine: {
                        show: true,
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [[0.2, 'rgba(14, 33, 76, 0.7)'], [0.8, 'rgba(14, 33, 76, 0.7)'], [1, 'rgba(14, 33, 76, 0.7)']],
                            width: 8,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                },
                {
                    name: '圆心盘',
                    type: "gauge",
                    radius: "10%", //仪表大小
                    z: 1,
                    splitNumber: 1,
                    startAngle: 350, //开始角度
                    endAngle: -9.9, //结束角度
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: '100%',
                            color: [[0.33, 'rgba(61,145,239,0.56)'], [0.66, 'rgba(61,145,239,0.56)'], [1, 'rgba(61,145,239,0.56)']],
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                },
            ]
        };
        optionAry.push(option)
    }

    let option3 = {
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },
        series: [
            {
                name: '优化次数',
                type: 'gauge',
                z: 3,
                splitNumber: 6,
                radius: '80%',
                axisLine: {            // 坐标轴线
                    show: false,
                },
                axisTick: {            // 坐标轴小标记
                    length: 6,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#FFFFFF',
                    }
                },
                splitLine: {    // 分隔线
                    show: false,
                },
                axisLabel: {
                    show: false,
                    backgroundColor: 'auto',
                    borderRadius: 2,
                    color: '#eee',
                    padding: 3,
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                    textShadowColor: '#222'
                },
                pointer: {
                    show: false,
                },
                itemStyle: {
                    color: '#07B9FF'
                },
                title: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE   
                    color: '#fff',
                    fontSize: 12,
                    fontFamily: 'PingFang SC',
                    offsetCenter: [0, -12],
                },
                detail: {
                    color: '#00E4FF',
                    fontSize: 18,
                    fontFamily: 'PingFang SC',
                    fontWeight: 'bold',
                    offsetCenter: [0, 12],
                },
                data: [{ value: value3, name: '已进行计算' }]
            },

            {
                name: '进度条',
                type: "gauge",
                radius: "65%", //仪表大小
                z: 2,
                splitNumber: 1,
                axisLine: {
                    show: true,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0, '#28ACFF'], [1, '#28ACFF']
                        ],
                        width: 8
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: { //指针样式
                    show: false
                },
                detail: {
                    show: false
                }
            },
        ]
    };
    return {
        type: ActionConstants.UPDATE_PERFORMANCE_GAUGE,
        data: [optionAry[0], optionAry[1], option3],
        count: count
    }
}
/**
 * 创建Action
 * @param {type,color} type 常量类型;  color 颜色  
 */
export const updateOption = (type, color) => {  
    let xdata = [];
    let ydataAry = [];
    for (let i = 1; i < 30; i++) {
        xdata.push(i);
        let number1 = Math.random() * 100;
        ydataAry.push(number1);
    }
    let option = {
        grid: {
            top: '10%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            name: '',
            nameTextStyle: {
                color: '#FFF'
            },
            axisLabel: { color: '#FFF' },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: false
            },
            axisTick: {  // x轴刻度的颜色
                show: false
            },
            type: 'category',
            boundaryGap: false,
            data: xdata
        },
        yAxis: {
            name: '',
            nameTextStyle: {
                color: '#FFF'
            },
            type: 'value',
            axisLabel: { color: '#FFF' },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: false
            },
            axisTick: {  // x轴刻度的颜色
                show: false
            },
            splitLine: {     //网格线
                show: false
            },
        },
        color: [color],
        series: [
            {
                name: '',
                type: 'line',
                smooth: true,
                data: ydataAry
            }
        ]
    }
    return {
        type,
        data: option
    }
}




