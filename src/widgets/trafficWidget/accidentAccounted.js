import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficWidget/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { PropressContain, PropressItem } from './accidentAccountedStyle';

class AccidentAccounted extends Component {

    componentDidMount() {
        this.props.updateList()
        this.interval = setInterval(()=>{
            this.props.updateList()
        },3000)
    }

    getList = () => {
        if (this.props.list.size) return
        return this.props.list.map((item, index) => {
            return <PropressItem key={index}>
                <div className='title' style={{ textAlign: 'right' }}><span>{item.name}</span></div>
                <div className='propress'>
                    <div className='bgColor1' style={{ width: item.outPercentage }}></div>
                </div>
                <div className='text'>{item.number}</div>
            </PropressItem>
        })
    }
    render() {
        return (
            <WarpDiv>
                <h3>月事故类型占比TOP5</h3>
                <div className='last'></div>
                <PropressContain>
                    {this.getList()}
                </PropressContain>
            </WarpDiv>
        );
    }
};

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        list: state.getIn(['TrafficWidget', 'accidentAccounted']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: () => {
            dispatch(ActionCreators.UpdataAccidentAccounted())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccidentAccounted);