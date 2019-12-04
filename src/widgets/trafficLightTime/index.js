import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { WarpDiv } from '../commonStyle'
import RoadList from './roadList';
import PerformanceGauge from './performanceGauge';
import QueueLengthLine from './queueLength';
import StraightSpeedLine from './straightSpeed';
import TurningSpeedLine from './turningSpeed';


export default class ColumnChartCreator {
    /**
     * 
     * @param {*} chartConfig 
     * 路口信息列表
     */
    static createRoadList(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render( <Provider store={store}><RoadList /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 仪表盘
     */
    static createPerformanceGauge(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render( <Provider store={store}><PerformanceGauge /></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 路口名
     */
    static createRoadName(chartConfig, parentElement) {
        if (!parentElement) return;
        let style = {fontSize:'20px',color:'#47FCFF',height:`${70 * 100 / 1080}vh`,lineHeight:`${70 * 100 / 1080}vh`,textAlign:'center',padding:0,margin:0}
        const roadName = <WarpDiv>
            <div className='last'></div>
                <h1 style={style}>太白南路/G108（路口）</h1>
            </WarpDiv>
        ReactDOM.render( roadName, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 路口队列长度
     */
    static createQueueLengthLine(chartConfig, parentElement) {
        if (!parentElement) return;      
        ReactDOM.render( <Provider store={store}><QueueLengthLine/></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 路口直行速度
     */
    static createStraightSpeedLine(chartConfig, parentElement) {
        if (!parentElement) return;      
        ReactDOM.render( <Provider store={store}><StraightSpeedLine/></Provider>, parentElement)
    }

    /**
     * 
     * @param {*} chartConfig 
     * 路口转弯侧速度
     */
    static createturnSpeedLine(chartConfig, parentElement) {
        if (!parentElement) return;      
        ReactDOM.render( <Provider store={store}><TurningSpeedLine/></Provider>, parentElement)
    }
}




