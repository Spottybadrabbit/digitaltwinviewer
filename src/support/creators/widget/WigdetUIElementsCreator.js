import styled from 'styled-components';
import { ChartWidgetType } from '../../others/WidgetInfos';
import * as AppEvent from '../../../core/AppEvent';
import EventManager from '../../../core/managers/EventManager';
import CreateTrafficFlowChart from '../../../widgets/trafficFlow';
import CreateTrafficLightChart from '../../../widgets/trafficLightTime';
import CreateTrafficControlCenter from '../../../widgets/trafficControlCenter';
import CreateChartConTraffic from '../../../widgets/trafficWidget';
import CreateChartConMonitoring from '../../../widgets/peopleStreamMonitoring';

/**
 * 界面组件创建器
 */
export default class WigdetUIElementsCreator {

    /**
     * 根据配置文件创建组件Widget
     * @param {*} widgetConfigs 
     */
    static createElements(widgetConfigs) {
        const widgets = widgetConfigs.map((config) => {
            if (config.id === undefined || config.id.trim() === '') {
                console.warn('组件配置项未指定ID值');
            }
            let widget = styled.div.attrs({
                id: config.id
            })`
                width: ${config.style.appearance.common.width};
                height: ${config.style.appearance.common.height};
                position: ${config.style.appearance.common.position};
                display: ${config.style.appearance.common.display};
                background-color: ${config.style.appearance.common.backgroundColor};
                z-index: ${config.style.appearance.common.zIndex};
                top:${config.style.appearance.common.top};
                left:${config.style.appearance.common.left};
                right: ${config.style.appearance.common.right}; 
            `;
            return widget;
        });
        EventManager.dispatchEvent(AppEvent.WIDGET_DASHBOARD_PARENT_CONTAINER, { widgets, widgetConfigs });
    }

    /**
     * 在父元素内部添加图表组件
     * @param {*} config widget配置对象
     * @param {*} parentElement 父元素
     */
    static appendChildChartElement(parentContainers) {
        parentContainers.widgetConfigs.forEach((config) => {
            switch (config.type) {
                /**
                 * 交通流量动态监测
                 */
                case ChartWidgetType.TITLE_TEXT:
                    CreateTrafficFlowChart.createColumnChart(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.PROGRESS_BAR:
                    CreateTrafficFlowChart.createProgressBar(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_PIE:
                    CreateTrafficFlowChart.createChartPie(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_PIE_PROPRESS:
                    CreateTrafficFlowChart.createChartPiePropress(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_BAR_GRADIENT:
                    CreateTrafficFlowChart.createChartBarGradient(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_LINE_AREA:
                    CreateTrafficFlowChart.createChartlineArea(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_LINE_STACKED:
                    CreateTrafficFlowChart.createChartStackedLine(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_BAR_MULTIPLE:
                    CreateTrafficFlowChart.createChartBarMultiple(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.CHART_lINE_MULTIPLE:
                    CreateTrafficFlowChart.createChartLineMultiple(config, document.getElementById(config.id));
                    break;

                /**
                 * 交通灯配时优化
                 */
                case ChartWidgetType.ROAD_INFOR_LIST:
                    CreateTrafficLightChart.createRoadList(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.PERFORMANCE_GAUGE:
                    CreateTrafficLightChart.createPerformanceGauge(config, document.getElementById(config.id));
                    break;

                case ChartWidgetType.ROAD_NAME:
                    CreateTrafficLightChart.createRoadName(config, document.getElementById(config.id));
                    break;

                case ChartWidgetType.QUEUE_LENGTH_LINE:
                    CreateTrafficLightChart.createQueueLengthLine(config, document.getElementById(config.id));
                    break;

                case ChartWidgetType.STRAIGHT_SPEED_LINE:
                    CreateTrafficLightChart.createStraightSpeedLine(config, document.getElementById(config.id));
                    break;

                case ChartWidgetType.TURN_SPEED_LINE:
                    CreateTrafficLightChart.createturnSpeedLine(config, document.getElementById(config.id));
                    break;

                //公共交通调度指挥  
                case ChartWidgetType.SUSPICIOUS_PERSON:
                    CreateTrafficControlCenter.createSuspiciousPerson(config, document.getElementById(config.id));
                    break;

                case ChartWidgetType.VIOLATION_CAR:
                    CreateTrafficControlCenter.createViolationCar(config, document.getElementById(config.id));
                    break;

                case ChartWidgetType.TRAFFIC_ACCIDENT:
                    CreateTrafficControlCenter.createTrafficAccident(config, document.getElementById(config.id));
                    break;


                case ChartWidgetType.BUS_LOAD:
                    CreateTrafficControlCenter.createBusLoad(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.TRAFFIC_CHART_BAR:
                    CreateTrafficControlCenter.createTrafficChartBar(config, document.getElementById(config.id));
                    break;
                case ChartWidgetType.EVENT_COUNT:
                    CreateTrafficControlCenter.createEventCount(config, document.getElementById(config.id));
                    break;

                /**
                 * 交通事故
                 */
                //交通－交通事故实时报警
                case ChartWidgetType.TRAFFIC_POLICE:
                    CreateChartConTraffic.createPoliceInfo(config, document.getElementById(config.id));
                    break;
                //交通－交通事故处理
                case ChartWidgetType.TRAFFIC_ACCIDENT_DEAL:
                    CreateChartConTraffic.createAccidentDeal(config, document.getElementById(config.id));
                    break;
                //交通－交通事故处理
                case ChartWidgetType.TRAFFIC_ACCIDENT_TYPE:
                    CreateChartConTraffic.createAccidentAccounted(config, document.getElementById(config.id));
                    break;
                //交通－月事故高发路段
                case ChartWidgetType.TRAFFIC_ACCIDENT_HEIGHT:
                    CreateChartConTraffic.createAccidentHeight(config, document.getElementById(config.id));
                    break;
                //交通－事故等级占比
                case ChartWidgetType.TRAFFIC_ACCIDENT_LEVEL:
                    CreateChartConTraffic.createAccidentLevel(config, document.getElementById(config.id));
                    break;
                //交通－车辆来源占比
                case ChartWidgetType.TRAFFIC_ACCIDENT_CAR_SOURCE:
                    CreateChartConTraffic.creatAccidentCarSource(config, document.getElementById(config.id));
                    break;
                //交通－事故车辆类型占比
                case ChartWidgetType.TRAFFIC_ACCIDENT_CAR_TYPE:
                    CreateChartConTraffic.creatAccidentCarType(config, document.getElementById(config.id));
                    break;

                /**
                 * 监测人流和非机动车
                 */
                //监测人流和非机动-违法类型TOP5
                case ChartWidgetType.ILLEGAL_Type_TOP5:
                    CreateChartConMonitoring.createIllefalTypeTop(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-违法类型占比
                case ChartWidgetType.ILLEGAL_Type_ACCOUNTED:
                    CreateChartConMonitoring.createIllegalTypeAccound(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-违法时间
                case ChartWidgetType.ILLEGAL_Time:
                    CreateChartConMonitoring.createIllegalTime(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-车辆违法总量
                case ChartWidgetType.ILLEGAL_CAR_TOTAL:
                    CreateChartConMonitoring.createIllegalCarTotal(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-路口名字
                case ChartWidgetType.ITLEGAL_ROAD:
                    CreateChartConMonitoring.creatRoad(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-路视频展示
                case ChartWidgetType.ILLEGAL_VIDEO:
                    CreateChartConMonitoring.creatShowVideo(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-行人
                case ChartWidgetType.ILLEGAL_PEOPLE:
                    CreateChartConMonitoring.creatIllegPepole(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-非机动车
                case ChartWidgetType.ILLEGAL_NOMOTOR_VEHICLE:
                    CreateChartConMonitoring.creatIllegNomotorVehicle(config, document.getElementById(config.id));
                    break;
                //监测人流和非机动-近七天违法趋势图
                case ChartWidgetType.ILLEGAL_TREND:
                    CreateChartConMonitoring.creatIllegalTrend(config, document.getElementById(config.id));
                    break;
                default:
                    break;
            }
        });
    }
}