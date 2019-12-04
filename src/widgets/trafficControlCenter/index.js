import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import SuspiciousPerson from './suspiciousPerson';
import ViolationCar from './violationCar';
import TrafficAccident from './trafficAccident';
import BusLoad from './busLoad';
import RoadFlowDetection from './roadFlowDetection';
import EventCount from './eventCount';



export default class ColumnChartCreator {
    /**
     * 
     * @param {*} chartConfig 
     * 检测到可疑人员
     */
    static createSuspiciousPerson(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><SuspiciousPerson /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 违章车辆数量
     */
    static createViolationCar(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><ViolationCar /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 检测到车祸
     */
    static createTrafficAccident(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><TrafficAccident /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 公交运行载荷
     */
    static createBusLoad(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><BusLoad /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 路口人流车流检测
     */
    static createTrafficChartBar(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><RoadFlowDetection /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 重点区域事件统计
     */
    static createEventCount(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><EventCount /></Provider>, parentElement)
    }

}
