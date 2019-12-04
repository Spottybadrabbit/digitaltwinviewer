import echarts from 'echarts/lib/echarts';
import * as ActionConstants from './ActionConstants';

/**
 * 创建月事故类型占比TOP5 action变化
 */
export const UpdataAccidentAccounted = () => {
    let list = [
        {
            name: '超车事故',
            outPercentage: '80%',
            number: 80
        },
        {
            name: '追尾事故',
            outPercentage: '70%',
            number: 70
        },
        {
            name: '直行事故',
            outPercentage: '50%',
            number: 50
        },
        {
            name: '左转弯事故',
            outPercentage: '40%',
            number: 40
        },
        {
            name: '右转弯事故',
            outPercentage: '10%',
            number: 10
        }
    ]
    list.forEach((item, index) => {
        let num = Math.floor(Math.random() * 100 + 1);
        item.number = num;
        item.outPercentage = num + '%';
    })

    list.sort(function (a, b) {
        return b.number - a.number
    });
    return {
        type: ActionConstants.UPDATE_TRAFFIC_ACCIDENT_TYPE,
        data: list
    }
}

/**
 * 创建月事故高发路段变化action
 */
export const updateAccidentHeight = () => {
    let dataAxis = ['石桥立交', '丈八东路', '马腾空立交', '社干路', '南二环', '文昌门', '西影路', '雁翎路', '曲江大道', '西部大道'];
    let data = [10, 20, 30, 40, 45, 35, 25, 10, 5, 45]; // 10, 20, 30, 40, 45, 35, 25, 10, 5, 45 柱状图高度
    // 动态随机
    data.forEach((item,index,arr) => {
        let num = Math.floor(Math.random() * 50 + 1);
        arr[index] = num
    })
    let option = {
        grid: {
            top: 15
        },
        xAxis: {
            data: dataAxis,
            axisLabel: { color: '#FFF', fontSize: 14, rotate: 30, interval: 0 },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisTick: {  // x轴刻度的颜色
                show: false,

            },
            splitLine: {     //网格线
                show: false
            },
        },
        yAxis: {
            max: 50,
            axisLabel: { color: '#FFF' },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {  // x轴刻度的颜色
                show: false,

            },
            splitLine: {     //网格线
                show: false
            },
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                barWidth: 8,
                barCategoryGap: '10%',
                itemStyle: {

                    normal: {
                        barBorderRadius: [4, 4, 0, 0],

                        color: function (params) {
                            //动态设置不同柱子的颜色
                            var colorList = [
                                ['#FA1354', '#182A2F'],
                                ['#FA1354', '#182A2F'],
                                ['#FFCC00', '#182A2F'],
                                ['#FFCC00', '#182A2F'],
                                ['#FFCC00', '#182A2F'],
                                ['#3D91EF', '#182A2F'],
                                ['#3D91EF', '#182A2F'],
                                ['#3D91EF', '#182A2F'],
                                ['#4498BE', '#182A2F'],
                                ['#4498BE', '#182A2F']
                            ];
                            var index = params.dataIndex;
                            if (params.dataIndex >= colorList.length) {
                                index = params.dataIndex - colorList.length;
                            }
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [
                                    { offset: 0, color: colorList[index][0] },
                                    // { offset: 0.5, color: colorList[index][1] },
                                    { offset: 1, color: colorList[index][1] }
                                ]);
                        },
                    }
                },
                data: data
            }
        ]
    }

    return {
        type: ActionConstants.UPDATE_TRAFFIC_ACCIDENT_HEIGHT,
        data: option
    }
}
/**
 * 创建月事故等级占比变化action
 */
export const updateAccidentLevel = () => {
    let number1 = Math.random() * 100;
    let number2 = Math.random() * 100;
    let numner3 = Math.random() * 100;
    let numner4 = Math.random() * 100;
    let data = [
        { value: number1, name: '轻微事故' },
        { value: number2, name: '重大事故' },
        { value: numner3, name: '一般事故' },
        { value: numner4, name: '特大事故' },
    ]
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#326EF4', '#FFCC00', '#16DDDF', '#F81D3C'],
        legend: {
            orient: 'horizontal',
            width: 300,
            height: '100%',
            right: 29,
            top: '20%',
            itemGap: 30,
            itemWidth: 20,
            itemHeight: 10,
            icon: 'rect',
            data: ['轻微事故', '重大事故', '一般事故', '特大事故'],
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '60%'],
                center: ["20%", "40%"],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }
        ]
    };
    return {
        type: ActionConstants.UPDATE_TRAFFIC_ACCIDENT_LEVEL,
        data: option
    }
}

/**
 * 创建月事故车辆来源占比
 */
export const updataAccidentAccounted = () => {
    let number1 = Math.floor(Math.random() * 100 + 1);
    let number2 = 100 - number1;
    let list = [
        {
            name: '本地车牌',
            outPercentage: number1 + '%',
            number: number1,
            accounted: number1 + '%',
            color: '#326EF4'
        },
        {
            name: '外地车牌',
            outPercentage: number2 + '%',
            number: number2,
            accounted: number2 + '%',
            color: '#FFCC00'
        }
    ]
    return {
        type: ActionConstants.UPDATE_TRAFFIC_ACCIDENT_CAR_SOURCE,
        data: list
    }
}

/**
 * 创建事故车辆类型占比变化action
 */
export const updataAccidentCarType = () => {
    let commutingRandom = Math.floor(Math.random() * 50 + 50);
    let other1 = 100 - commutingRandom;
    let operating = Math.floor(Math.random() * 50 + 50);
    let other2 = 100 - operating;
    let nOperating = Math.floor(Math.random() * 50 + 50);
    let other3 = 100 - nOperating;
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // color: ['#16DDDF', 'rgba(255,255,255,0)', '#FF00FF', '#FFCC00'],
        color: ['#FFCC00', 'rgba(255,255,255,0.1)', '#FF00FF', '#16DDDF'],
        legend: {
            icon: 'rect',
            orient: 'vertical',
            right: 29,
            top: 30,
            itemGap: 30,
            // data: ['通勤', '营运', '非营运', '其他'],
            data: [
                {
                    name: '通勤',
                    textStyle: {
                        color: '#FFCC00'
                    }
                }, {
                    name: '营运',
                    textStyle: {
                        color: '#FF00FF'
                    }
                }, {
                    name: '非营运',
                    textStyle: {
                        color: '#16DDDF'
                    }
                }
            ],
            textStyle: {
                fontSize: 16,
            },
            rich: {

            },
            formatter: function (name) {
                if (name === '通勤') {
                    // return '    60%    ' + name;
                    return `    ${commutingRandom}%    ${name}`;
                }
                if (name === '营运') {
                    return `    ${operating}%    ${name}`;
                }
                if (name === '非营运') {
                    return `    ${nOperating}%    ${name}`;
                }
            }
        },

        series: [
            {
                name: '访问来源',
                type: 'pie',
                itemStyle: {
                    // borderType: 'dashed',
                    // borderColor: '#000',
                    // borderWidth: 1,
                },
                selectedMode: 'single',
                radius: ['10%', '20%'],
                center: ["20%", "40%"],
                label: {
                    normal: {
                        position: 'inner',
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false,

                    }
                },
                data: [
                    { value: commutingRandom, name: '通勤' },
                    { value: other1, name: '其他' },
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                itemStyle: {
                    // borderType: 'dashed',
                    // borderColor: '#000',
                    // borderWidth: 1,
                },
                selectedMode: 'single',
                radius: ['30%', '40%'],
                center: ["20%", "40%"],

                label: {
                    normal: {
                        position: 'inner',
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: operating, name: '营运' },
                    { value: other2, name: '其他' },

                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                itemStyle: {
                    // borderType: 'dashed',
                    // borderColor: '#000',
                    // borderWidth: 1,
                },
                radius: ['50%', '60%'],
                center: ["20%", "40%"],

                label: {
                    normal: {
                        position: 'inner',
                        show: false,
                    }
                },
                data: [
                    { value: nOperating, name: '非营运' },
                    { value: other3, name: '其他' }
                ]
            }
        ]
    };
    return {
        type: ActionConstants.UPDATE_TRAFFIC_ACCIDENT_CAR_TYPE,
        data: option
    }
}
