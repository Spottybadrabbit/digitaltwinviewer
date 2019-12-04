import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../../store/widgets/trafficWidget/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { PropressContain, PropressItem } from './accidentCarSourceStyle';

class AccidentCarSource extends Component {

    componentDidMount() {
        this.props.updateList()
        this.interval = setInterval(()=>{
            this.props.updateList()
        },3000)
    }

    getList = () => {
        if(this.props.list.size) return null 
        return this.props.list.map((item, index) => {
            return <PropressItem key={index}>
                <div className='title' style={{ textAlign: 'right' }}><span>{item.name}</span></div>
                <div className='propress'>
                    <div className='bgColor1' style={{ width: item.outPercentage, backgroundColor: item.color}}></div>
                    <div className='number'>{item.number}</div>
                </div>
                <div className='text' style={{ color: item.color}}>{item.accounted}</div>
            </PropressItem>
        })
    }

    render() {
        return (
            <WarpDiv>
                <h3>月事故车辆来源占比</h3>
                <div className='last'></div>
                <PropressContain>
                    {this.getList()}
                </PropressContain>
            </WarpDiv>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['TrafficWidget','accidentAccountedlist'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: () => {
            dispatch(ActionCreators.updataAccidentAccounted());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccidentCarSource)