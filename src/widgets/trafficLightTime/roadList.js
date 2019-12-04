import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficLightTime/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { ListWarp } from './roadListStyle'

class ListComponent extends Component {

    componentDidMount() {    
        this.interval = setInterval(() => {
            this.props.updateList(this.props.roadListAry);
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getList = () => {
        return this.props.roadListAry.toJS().map((item, index) => {
            if (item.status === '预警') {
                return <div className='item-warp' key={index}>
                    <div className='first-item'>{item.name}</div>
                    <div className='item'>{item.accessTime}</div>
                    <div className='item'>{item.queueLength}</div>
                    <div className='item warn'>{item.status}</div>
                </div>
            } else {
                return <div className='item-warp' key={index}>
                    <div className='first-item'>{item.name}</div>
                    <div className='item'>{item.accessTime}</div>
                    <div className='item'>{item.queueLength}</div>
                    <div className='item'>{item.status}</div>
                </div>
            }
        })
    }
    render() {
        return (
            <WarpDiv>
                <h3>路口</h3>
                <div className='last'></div>
                <ListWarp>
                    <div className='head'>
                        <div className='first-item'>路口</div>
                        <div className='item'>通行时间</div>
                        <div className='item'>列队长度</div>
                        <div className='item'>状态</div>
                    </div>
                    <div className='body'>
                        <div className='list'>
                            {this.getList()}
                        </div>
                    </div>
                </ListWarp>
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
        roadListAry: state.getIn(['trafficLightTime', 'roadListAry'])
    }
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} list
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateList(list) {
            dispatch(ActionCreators.updateRoad(list));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);



