import echarts from 'echarts/lib/echarts';
import * as ActionConstants from './ActionConstants';

/**
 * 违法类型top5 
 */
export const updataIllefalTypeTop = () => {
    let list = [
        {
            name: '不按导向车道',
            outPercentage: '80%',
            number: 2256
        },
        {
            name: '违法停车',
            outPercentage: '80%',
            number: 2256
        },
        {
            name: '不系安全带',
            outPercentage: '80%',
            number: 2256
        },
        {
            name: '开车打电话',
            outPercentage: '80%',
            number: 2256
        },
        {
            name: '黄牌车占道',
            outPercentage: '80%',
            number: 2256
        }

    ]
    list.forEach(item => {
        let num = Math.floor(Math.random() * 100 + 1);
        item.outPercentage = num + '%'
        item.number = num * 10
    })
    list.sort(function (a, b) {
        return b.number - a.number
    })
    return {
        type: ActionConstants.UPDATA_ILLEGAL_Type_TOP5,
        data: list
    }
}
/**
 * 违法类型占比 Accounted
 */
export const updataIllegalTypeAccound = () => {
    // 饼图数据
    let data = [
        { value: 10, name: '不礼让行人' },
        { value: 10, name: '违法鸣笛' },
        { value: 10, name: '不按导向车道' },
        { value: 10, name: '违法停车' },
        { value: 10, name: '不系安全带' },
        { value: 30, name: '压线' },
        { value: 10, name: '开车打电话' },
        { value: 10, name: '闯红灯' }
    ]
    data.forEach(item => {
        let random = Math.floor(Math.random() * 10 + 1)
        item.value = random
    })

    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#3FACFF', '#FFF269', '#FC44A4', '#486AF9', '#63F161', '#FF8F5F', '#51E9FF', '#AE74F3'],
        legend: {
            orient: 'vertical',
            data: ['不礼让行人', '违法鸣笛', '不按导向车道', '违法停车', '不系安全带', '压线', '开车打电话', '闯红灯'],
            icon: 'circle',
            itemWidth: 5,
            itemHeight: 5,
            right: 50,
            top: 'middle',
            textStyle: {
                color: '#fff'
            },
            itemGap: 10,
            formatter: '  {name}'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        series: [
            {
                name: '违法类型',
                type: 'pie',
                radius: ['15%', '80%'],
                center: ['35%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: data
            }
        ]
    };
    return {
        type: ActionConstants.UPDATA_ILLEGAL_Type_ACCOUNTED,
        data: option
    }
}
/**
 * 违法时间高发路段分布
 */
export const updataIllegalTime = () => {
    let dataAxis = ['石桥立交', '丈八东路', '马腾空立交', '社干路', '南二环', '文昌门', '西影路', '雁翎路', '曲江大道', '西部大道'];
    let data = [10, 20, 30, 40, 45, 35, 25, 10, 5, 120]
    // data.forEach(item => {
    //     let num = Math.floor(Math.random() * 100 + 1);
    //     item = num
    // })
    for (let i = 0; i < data.length; i++) {
        let num = Math.floor(Math.random() * 120 + 1);
        data[i] = num
    }
    let option = {
        // grid: {
        //     top: 66
        // },
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
            max: 120,
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
                show: true,
                lineStyle: {
                    color: 'rgba(68,152,190,0.8)'
                }
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
    };
    return {
        type: ActionConstants.UPDATA_ILLEGAL_Time,
        data: option
    }
}

/**
 * 行人
 */
export const updataIllegapeople = () => {
    let list = [
        {
            sex: '男',
            hairstyle: '短发',
            coatType: '长袖',
            coatColor: '红色',
            underClothesType: '长裤',
            underClothesCOlor: '黄色',
            time: '2019.9.21/10:30',
            random: 0
        },
        {
            sex: '女',
            hairstyle: '长发',
            coatType: '短袖',
            coatColor: '绿色',
            underClothesType: '短裤',
            underClothesCOlor: '黑色',
            time: '2019.9.21/10:30',
            random: 0
        },
        {
            sex: '男',
            hairstyle: '短发',
            coatType: '长袖',
            coatColor: '红色',
            underClothesType: '长裤',
            underClothesCOlor: '黑色',
            time: '2019.9.21/10:30',
            random: 0
        },
        {
            sex: '女',
            hairstyle: '短发',
            coatType: '长袖',
            coatColor: '红色',
            underClothesType: '长裤',
            underClothesCOlor: '黑色',
            time: '2019.9.21/10:30',
            random: 0
        },
        {
            sex: '女',
            hairstyle: '短发',
            coatType: '长袖',
            coatColor: '红色',
            underClothesType: '长裤',
            underClothesCOlor: '黑色',
            time: '2019.9.21/10:30',
            random: 0
        },
        {
            sex: '男',
            hairstyle: '短发',
            coatType: '长袖',
            coatColor: '红色',
            underClothesType: '长裤',
            underClothesCOlor: '蓝色',
            time: '2019.9.21/10:30',
            random: 0
        },

    ]
    list.forEach(item => {
        let num = Math.floor(Math.random() * 100 + 80);
        item.random = num
    })
    list.sort(function (a, b) {
        return b.random - a.random
    });
    return {
        type: ActionConstants.UPDATA_ILLEGAL_PEOPLE,
        data: list
    }
}
/**
 * 非机动车
 */
export const updataIllegNomotorVehicle = () => {
    let list = [
        {
            sex: '男',
            carType: '电动车',
            load: '正常',
            ceiling: '无',
            tire: '无',
            time: '2018.9.21/10:30',
            random: 0
        },
        {
            sex: '女',
            carType: '摩托车',
            load: '空载',
            ceiling: '无',
            tire: '头盔',
            time: '2018.9.21/10:30',
            random: 0
        },
        {
            sex: '男',
            carType: '小汽车',
            load: '超载',
            ceiling: '无',
            tire: '无',
            time: '2018.9.21/10:30',
            random: 0
        },
        {
            sex: '男',
            carType: '货车',
            load: '空载',
            ceiling: '有',
            tire: '无',
            time: '2018.9.21/10:30',
            random: 0
        },
        {
            sex: '男',
            carType: '电动车',
            load: '超载',
            ceiling: '无',
            tire: '女',
            time: '2018.9.21/10:30',
            random: 0
        },
        {
            sex: '女',
            carType: '自行车',
            load: '超载',
            ceiling: '无',
            tire: '头盔',
            time: '2018.9.21/10:30',
            random: 0
        }
    ]
    list.forEach(item => {
        let num = Math.floor(Math.random() * 100 + 80);
        item.random = num
    })
    list.sort(function (a, b) {
        return b.random - a.random
    });
    return {
        type: ActionConstants.UPDATA_ILLEGAL_NOMOTOR_VEHICLE,
        data: list
    }
}
/**
 * 违法趋势图
 */
export const updataIllegalTrend = () => {
    let seriesData = [820, 932, 901, 934, 1290, 1330, 1000]
    seriesData.forEach((item, index, arr) => {
        let num = Math.floor(Math.random() * 3000 + 1);
        arr[index] = num
    })
    let option = {
        xAxis: {
            name: '日期',
            nameGap: 20,
            type: 'category',
            boundaryGap: false,
            data: ['', '8.16', '8.17', '8.18', '8.19', '8.20'],
            axisLabel: { color: '#FFF' },//x轴字体颜色
            axisLine: {  // x轴坐标轴颜色
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {  // x轴刻度的颜色
                show: false
            },
            splitLine: {     //网格线
                show: false,
            },
        },
        yAxis: {
            max: 3000,
            type: 'value',
            axisLabel: { color: '#FFF' },//x轴字体颜色
            axisLine: {  // y轴坐标轴颜色
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {  // y轴刻度的颜色
                show: false
            },
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: 'rgba(191,191,191,0.3)'
                }
            },
        },
        series: [{
            data: seriesData,
            type: 'line',
            symbol: 'circle',
            areaStyle: {
                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#0D3A64' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#387793' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            lineStyle: {
                color: '#00FFFF'
            },
            itemStyle: {
                color: '#00FFFF',
                borderColor: '#00FFFF'
            }
        }]
    };
    return {
        type: ActionConstants.UPDATA_ILLEGAL_TREND,
        data: option
    }
}




