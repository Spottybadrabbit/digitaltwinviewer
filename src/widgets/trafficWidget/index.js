import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import ReactDOM from 'react-dom';
import PoliceInfo from './policeInfo';
import AccidentDeal from './accidentDeal'
import AccidentAccounted from './accidentAccounted';
import AccidentHeight from './accidentHeight';
import AccidentLevel from './accidentLevel';
import AccidentCarSource from './accidentCarSource';
import AccidentCarType from './accidentCarType';

export default class ColumnChartCreator {
    /**
     * 
     * @param {*} chartConfig 
     */
    // 交通实施报警
    static createPoliceInfo(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><PoliceInfo /></Provider>, parentElement)
    }
    // 当前处理事故
    static createAccidentDeal(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><AccidentDeal /></Provider>, parentElement)
    }
    // 事故占比
    static createAccidentAccounted(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><AccidentAccounted /></Provider>, parentElement)
    }

    // 事故高发路段
    static createAccidentHeight(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><AccidentHeight /></Provider>, parentElement)
    }

    // 事故等级占比
    static createAccidentLevel(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><AccidentLevel /></Provider>, parentElement)
    }
    
    // 事故车辆来源
    static creatAccidentCarSource(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><AccidentCarSource /></Provider>, parentElement)
    }

    // 事故车辆类型
    static creatAccidentCarType(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><AccidentCarType /></Provider>, parentElement)
    }

    
}