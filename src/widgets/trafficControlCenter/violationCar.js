import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficControlCenter/store/ActionCreators';
import * as ActionConstants from '../../store/widgets/trafficControlCenter/store/ActionConstants';
import { WarpDiv } from '../commonStyle';
import { DivCon } from './violationCarStyle';

class ViolationComponent extends Component {

    getContent = () => {
        if (this.props.listAry.size === 0) {
            return null
        };
        let data = this.props.listAry.toJS()[0];
        return (
            <DivCon>
                <img src={data.img} alt='图片' />
                <div className='infor'>
                    <div><span>事发路口</span><span>{data.addr}</span></div>
                    <div><span>事发时间</span><span>{data.time}</span></div>
                    <div><span>是否派人</span><span>{data.action}</span></div>
                    <div><span>解决情况</span><span>{data.status}</span></div>
                    <div><span>拥堵指数</span><span>{data.congestionIndex}</span></div>
                </div>
            </DivCon>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.update(this.props.listAry);
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.props.listAry.size === 0) {
            return null
        };
        return (
            <WarpDiv>
                <h3>违章车辆数量超过阈值</h3>
                <div className='last'></div>
                {this.getContent()}
            </WarpDiv>
        )
    }

}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        listAry: state.getIn(['trafficControlCenter', 'violationCar'])
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        update(list) {
            dispatch(ActionCreators.updateContent(ActionConstants.UPDATE_VIOLATION_CAR, list));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViolationComponent);