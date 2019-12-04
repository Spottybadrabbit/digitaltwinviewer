import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { WarpDiv } from '../commonStyle'
import { WarnText } from './indexStyle'
import IllefalTypeTop from './illegalTypeTop';
import IllegalTypeAccound from './illegalTypeAccound';
import IllegalTime from './illegalTime';
import IllegalCarTotal from './illegalCarTotal';
import IllegalShowVideo from './illegalShowVideo';
import Illegapeople from './illegaPeople';
import IllegNomotorVehicle from './illegalNomotorVehicle';
import IllegalTrend from './illegalTrend';
export default class ColumnChartCreator {
    /**
     * 
     * @param {*} chartConfig 
     */
    // 违法类型 top5
    static createIllefalTypeTop(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllefalTypeTop /></Provider>, parentElement)
    }

    // 违法类型占比
    static createIllegalTypeAccound(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllegalTypeAccound /></Provider>, parentElement)
    }

    // 月事故高发路段
    static createIllegalTime(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllegalTime /></Provider>, parentElement)
    }

    // 本月车辆违法总量
    static createIllegalCarTotal(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllegalCarTotal /></Provider>, parentElement)
    }

    // 路口名字
    static creatRoad(chartConfig, parentElement) {
        if (!parentElement) return;
        const warpdiv =
            <WarpDiv>
                <WarnText><span>科技路地铁口(C口)</span></WarnText>
                <div className='last'></div>
            </WarpDiv>
        ReactDOM.render(warpdiv, parentElement)
    }

    // 视频播放
    static creatShowVideo(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllegalShowVideo /></Provider>, parentElement)

    }

    // 行人
    static creatIllegPepole(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><Illegapeople /></Provider>, parentElement)

    }

    // 非机动车
    static creatIllegNomotorVehicle(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllegNomotorVehicle /></Provider>, parentElement)

    }
    
    // 近七天违法趋势图
    static creatIllegalTrend(chartConfig, parentElement) {
        if (!parentElement) return;
        ReactDOM.render(<Provider store={store}><IllegalTrend /></Provider>, parentElement)
    }
   
}