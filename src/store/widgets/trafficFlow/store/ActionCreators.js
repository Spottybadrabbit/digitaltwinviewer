import echarts from 'echarts/lib/echarts';
import * as ActionConstants from './ActionConstants';
import { fromJS } from 'immutable';

/**
 * 创建城市事件变化Action
 * @param {}   
 */
export const updateMajorEvent = (list) => {
    let listAry = list.toJS();
    let firstItem = listAry.shift();
    listAry.push(firstItem);
    return {
        type:ActionConstants.UPDATE_MAJOR_EVENT,
        data: fromJS(listAry)
    }
}
/**
 * 创建车牌类型变化Action
 * @param {}   
 */
export const updateLicensePlate = () => {
    //随机数
    let randomNumber1 = Math.floor(Math.random() * 100 + 100);
    let randomNumber2 = Math.floor(Math.random() * 50 + 50);
    let data = [randomNumber1, randomNumber2];
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} : {c} ({d}%)"
        },
        grid: {
            top: '0%',
            bottom: '0%',
            containLabel: true
        },
        legend: {
            bottom: 5,
            icon: 'circle',
            itemHeight: 6,
            itemWidth: 6,
            orient: 'vertical',
            textStyle: {
                color: '#FFF',
                fontSize: 12,
            },
            formatter: function (name) {
                if (name === '本地车辆') {
                    return name + '--' + data[0] + '        ' + (Math.round(data[0] / (data[0] + data[1]) * 100) + '%');
                } else if (name === '外地车辆') {
                    return name + '--' + data[1] + '          ' + (Math.round(data[1] / (data[0] + data[1]) * 100) + '%');
                } else {
                    return '';
                }
            },
        },
        color: ['#43F8FF', '#7C17F8'],
        series: [
            {
                name: '半径模式',
                type: 'pie',
                radius: [20, 40],
                center: ['50%', '35%'],
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
                data: [
                    { value: data[0], name: '本地车辆' },
                    { value: data[1], name: '外地车辆' }
                ]
            }
        ]
    }

    return {
        type: ActionConstants.UPDATE_LICENSE_PLATE,
        data: option,
    }
}

/**
 * 创建车辆类型变化Action
 * @param {}   
 */
export const updateCarType = () => {
    //随机数
    let randomNumber1 = Math.floor(Math.random() * 100 + 100);
    let randomNumber2 = Math.floor(Math.random() * 100 + 100);
    let randomNumber3 = Math.floor(Math.random() * 100 + 100);
    //数据源
    let data = [randomNumber1, randomNumber2, randomNumber3];
    //总计
    let total = randomNumber1 + randomNumber2 + randomNumber3;
    let optionAry = [];
    let colorAry = [['#43F8FF', 'rgba(95,138,228,0.3)'], ['#D72EFF', 'rgba(95,138,228,0.3)'], ['#F91B6D', 'rgba(95,138,228,0.3)']];
    for (let i = 0; i < 3; i++) {
        let option = {
            title: {
                show: true,
                text: Math.round(data[i] / total * 100) + '%',
                top: 'middle',
                left: 'center',
                textStyle: {
                    fontSize: '20',
                    color: '#fff',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{d}%",
                show: false
            },
            color: colorAry[i],
            series:
            {
                name: '',
                type: 'pie',
                radius: ['65%', '85%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: true,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: data[i], name: '' },
                    { value: total - data[i], name: '' }
                ]
            }
        };
        optionAry.push(option);
    }

    return {
        type: ActionConstants.UPDATE_CAR_TYPE,
        data: optionAry
    }
}

/**
 * 创建拥堵变化Action
 * @param {}   
 */
export const updateBlockBarGradient = () => {
    let xdata = [];
    let ydata = [];
    for (let i = 0; i < 25; i++) {
        xdata.push(i);
        let number = Math.floor(Math.random() * 100);
        ydata.push(number);
    }
    let option = {
        grid: {
            top: '10%',
            left: '12%',
            right: '12%',
            bottom: '20%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        color: ['#45F4F7', '#126AF7', '#D12EF7', '#F51B71'],
        xAxis: {
            name: '时间',
            nameTextStyle: {
                color: '#FFF'
            },
            data: xdata,
            axisLabel: { color: '#FFF', interval: 5 },//x轴字体颜色,坐标间隔
            axisLine: {  // x轴坐标轴颜色
                show: false
            },
            axisTick: {  // x轴刻度的颜色
                show: false
            }
        },
        yAxis: {
            min: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {     //网格线
                show: false
            },
            axisLabel: {
                color: '#FFF',
                formatter: function (value) {                   
                    var texts = [];
                    if (value === 0);
                    else if (value === 20) {
                        texts.push('畅通');
                    }
                    else if (value === 40) {
                        texts.push('缓行');
                    }
                    else if (value === 60) {
                        texts.push('拥挤');
                    }
                    else if (value === 80) {
                        texts.push('拥堵');
                    }
                    else {
                        texts.push('');
                    }
                    return texts;
                }
            }
        },
        series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#D82FFF' },
                            { offset: 0.5, color: '#0E72FF' },
                            { offset: 1, color: '#47FCFF' }
                        ]
                    ),
                    barBorderRadius: [10, 10, 10, 10]
                },
            },
            data: ydata
        }
        ]
    }

    return {
        type: ActionConstants.UPDATE_BLOCK_BAR_GRADIENT,
        data: option
    }
}

/**
 * 创建车速Action
 * @param {}   
 */
export const updateCarSpeed = () => {
    let xdata = [];
    let ydata1 = [];
    let ydata2 = [];
    //ydata1,ydata2  series中两组数据name相同，data数据部分相同
    for (let i = 0; i < 25; i++) {
        xdata.push(i);
        let num = Math.random() * 100

        if (i < 15) {
            ydata1.push(num);
            ydata2.push('');
        } else {
            ydata2.push(num);
        }
    }

    let option = {
        grid: {
            top: '25%',
            left: '12%',
            right: '12%',
            bottom: '25%',
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ['#43F8FF'],
        xAxis: {
            name: '时间',
            nameTextStyle: {
                color: '#FFF'
            },
            axisLabel: { color: '#FFF', interval: 5 },//x轴字体颜色,坐标间隔
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
            name: 'km/h',
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
        series: [{
            name: '车速',
            data: ydata1,
            type: 'line',
            smooth: true,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(68, 152, 190, 0.4)' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#43F8FF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
            }
        },
        {
            name: '车速',
            data: ydata2,
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        width: 0,
                    }
                }
            }
        }
        ]
    }

    return {
        type: ActionConstants.UPDATE_CAR_SPEED,
        data: option,
    }
}


/**
 * 创建重点路口流量Action
 * @param {}   
 */
export const updateFlowDelection = (type) => {
    let xdata = [];
    let ydataAry = [[], [], []];
    for (let i = 1; i < 30; i++) {
        xdata.push(i);
        let number1 = Math.random() * 100;
        let number2 = Math.random() * 100;
        let numner3 = Math.random() * 100;
        ydataAry[0].push(number1);
        ydataAry[1].push(number2);
        ydataAry[2].push(numner3)
    }
    let option = {
        grid: {
            left: '5%',
            right: '15%',
            top: '20%',
            bottom: '20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['八月', '九月', '十月'],
            bottom: 5,
            icon: 'circle',
            itemHeight: 6,
            itemWidth: 6,
            textStyle: {
                color: '#FFF',
                fontSize: 14,
            }
        },
        color: ['#D12EF7', '#45F4F7', '#126AF7'],
        xAxis: {
            name: '单位/天',
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
            name: '单位/个',
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
        series: [
            {
                name: '八月',
                type: 'line',
                smooth: true,
                data: ydataAry[0]
            },
            {
                name: '九月',
                type: 'line',
                smooth: true,
                data: ydataAry[1]
            },
            {
                name: '十月',
                type: 'line',
                smooth: true,
                data: ydataAry[2]
            }
        ]
    }

    return {
        type: ActionConstants.UPDATE_FLOW_DETECTION,
        data: option,
    }
}

/**
 * 创建常见交通违规项目Action
 * @param {}   
 */
export const updateTratticViolation = () => {
    let colorAry = ['#F3124C', '#BA0D5F', '#A4052E', '', '#FFE00F', '#D7C500', '#C7A002', '', '#47FCFF', '#10BCBF', '#129193',];
    let xdata = [];
    let ydata = [];
    for (let i = 0; i < 11; i++) {
        xdata.push(i);
        let number = Math.random() * 100;
        if (i === 3 || i === 7) {
            number = 0
        }
        ydata.push({ value: number, itemStyle: { color: colorAry[i] } });
    }
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            left: '5%',
            right: '0%',
            top: '10%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['闯红灯', '超速行驶', '未系安全带', '', '错占车道', '违规上车', '异常停车', '', '接打电话', '单手驾驶', '未让行人'],
                axisLabel: { color: '#FFF', fontSize: 12, rotate: 30, interval: 0 },//x轴字体颜色
                axisLine: {  // x轴坐标轴颜色
                    show: false
                },
                axisTick: {  // x轴刻度的颜色
                    show: false
                },
                splitLine: {     //网格线
                    show: false
                },
            }
        ],
        yAxis: {
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
        series: [
            {
                type: 'bar',
                barWidth: '60%',
                data: ydata
            }
        ]
    }
    return {
        type: ActionConstants.UPDATE_TRAFFIC_VIOLATION,
        data: option,
    }
}

/**
 * 创建地铁实时流量监控Action
 * @param {}   
 */
export const updateSubwayFlow = () => {
    let xdata = [];
    let ydataAry = [[], [], [], []];
    for (let i = 1; i < 30; i++) {
        xdata.push(i);
        let number1 = Math.random() * 100;
        let number2 = Math.random() * 100;
        let numner3 = Math.random() * 100;
        let numner4 = Math.random() * 100;
        ydataAry[0].push(number1);
        ydataAry[1].push(number2);
        ydataAry[2].push(numner3);
        ydataAry[3].push(numner4);
    }
    let option = {
        grid: {
            left: '5%',
            right: '15%',
            top: '10%',
            bottom: '20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['北大街', '五路口', '通化门', '小寨'],
            bottom: 5,
            icon: 'circle',
            itemHeight: 6,
            itemWidth: 6,
            textStyle: {
                color: '#FFF',
                fontSize: 12,
            }
        },
        color: ['#FFE00F', '#F31C81', '#06D6D8', '#14F71F'],
        xAxis: {
            name: '单位/h',
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
        series: [
            {
                name: '北大街',
                type: 'line',
                smooth: true,
                data: ydataAry[0]
            },
            {
                name: '五路口',
                type: 'line',
                smooth: true,
                data: ydataAry[1]
            },
            {
                name: '通化门',
                type: 'line',
                smooth: true,
                data: ydataAry[2]
            },
            {
                name: '小寨',
                type: 'line',
                smooth: true,
                data: ydataAry[3]
            }
        ]
    }
    return {
        type: ActionConstants.UPDATE_SUBWAY_FLOW,
        data: option,
    }
}
