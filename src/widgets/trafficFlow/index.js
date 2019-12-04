import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MajorEvent from './majorEvent';
import RoadSummary from './RoadSummary'
import CarTypePie from './licensePlate';
import CarPiePropress from './CarPiePropress';
import BarGradient from './blockBarGradient';
import CarSpeed from './CarSpeed';
import FlowDetection from './FlowDetection';
import TrafficViolation from './TrafficViolation'
import SubwayFlowDetection from './SubwayFlowDetection'


export default class ColumnChartCreator {
    /**
     * 
     * @param {*} chartConfig 
     * 城市大型事件 
     */
    static createColumnChart(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><MajorEvent /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 道路概况
     */
    static createProgressBar(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><RoadSummary /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 车牌类型
     */
    static createChartPie(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><CarTypePie /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 车辆类型
     */
    static createChartPiePropress(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><CarPiePropress /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 拥堵变化
     */
    static createChartBarGradient(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><BarGradient /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 车速变化
     */
    static createChartlineArea(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><CarSpeed /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 重点路口流量
     */
    static createChartStackedLine(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><FlowDetection /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 常见交通违规项目
     */
    static createChartBarMultiple(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><TrafficViolation /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 地铁实时流量监控
     */
    static createChartLineMultiple(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><SubwayFlowDetection /></Provider>, parentElement)
    }
}