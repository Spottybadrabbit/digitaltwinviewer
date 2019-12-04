export const ChartWidgetType = {
    /**
     * 交通图
     **/
    //交通图-交通实时报警
    TRAFFIC_POLICE: 'trafficPolice',
    //交通图－交通事故处理
    TRAFFIC_ACCIDENT_DEAL: 'trafficAccidentDeal',
    //交通图－月事故类型Top5占比
    TRAFFIC_ACCIDENT_TYPE: 'trafficAccidentType',
    //交通图－月事故高发路段
    TRAFFIC_ACCIDENT_HEIGHT: 'trafficAccidentHeight',
    //交通图－月事故等级占比
    TRAFFIC_ACCIDENT_LEVEL: 'trafficAccidentLevel',
    //交通图－事故车辆来源占比
    TRAFFIC_ACCIDENT_CAR_SOURCE: 'trafficAccidentCarSource',
    //交通图－事故车辆类型占比 
    TRAFFIC_ACCIDENT_CAR_TYPE: 'trafficAccidentCarType',

    /**
     * 人流非机动车监测
     **/
    ILLEGAL_Type_TOP5: 'illegalTypeTop5',
    //违法类型占比 Accounted
    ILLEGAL_Type_ACCOUNTED: 'illegalTypeAccounted',
    //违法时间高发路段分布
    ILLEGAL_Time: 'illegalTime',
    //本月违法车辆总量
    ILLEGAL_CAR_TOTAL: 'illegalCarTotal',
    //路口
    ITLEGAL_ROAD: 'illegalRoad',
    // 行人
    ILLEGAL_PEOPLE: 'illegaPeople',
    // 非机动车
    ILLEGAL_NOMOTOR_VEHICLE: 'illegalNomotorVehicle',
    // 展示视频
    ILLEGAL_VIDEO: 'illegalVideo',
    // 违法趋势图
    ILLEGAL_TREND: 'illegalTrend',

    /**
     * 交通流量动态监测
     **/
    TITLE_TEXT: 'title-text',
    //进度条
    PROGRESS_BAR: 'progress_bar',
    //饼图
    CHART_PIE: 'chartPie',
    //圆环进度条
    CHART_PIE_PROPRESS: 'chartPiePropress',
    //渐变柱状图
    CHART_BAR_GRADIENT: 'chartBarGradient',
    //折线面积图
    CHART_LINE_AREA: 'chartLineAreaSpeed',
    //堆积折线图
    CHART_LINE_STACKED: 'chartLineStacked',
    //多块柱状图
    CHART_BAR_MULTIPLE: 'chartBarMultiple',
    //多条折线
    CHART_LINE_MULTIPLE: 'chartLineMultiple',

    /**
     * 交通灯配时优化
     **/
    //路口列表
    ROAD_INFOR_LIST: 'roadInforList',
    //仪表盘
    PERFORMANCE_GAUGE: 'performanceGauge',
    //ROAD_NAME
    ROAD_NAME: 'roadName',
    QUEUE_LENGTH_LINE: 'queueLengthLine',
    STRAIGHT_SPEED_LINE: 'straightSpeedLine',
    TURN_SPEED_LINE: 'turnSpeedLine',

    /**
     * 公共交通调度指挥
     **/

    //可疑人员
    SUSPICIOUS_PERSON: 'suspiciousPerson',
    //违章车辆数量
    VIOLATION_CAR: 'violationCar',
    //检测到车祸
    TRAFFIC_ACCIDENT: 'trafficAccident',
    //公交运行载荷
    BUS_LOAD: 'busLoad',
    //路口人流车流检测
    TRAFFIC_CHART_BAR: 'trafficChartBar',
    //全局地图
    EVENT_COUNT: 'eventCount'
}