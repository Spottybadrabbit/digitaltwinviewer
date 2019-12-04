import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WarpDiv } from '../commonStyle';
import { Con } from './accidentDealStyle';
class AccidentDeal extends Component {

    getList = () => {
        return this.props.obj.toJS().accidentDealList.map((item, index) => {
            return <div className='info-item' key={index}>
                <span>{item.key}</span>
                <span>{item.value}</span>
            </div>
        })
    }

    render() {
        return (
            <WarpDiv>
                <h3>当前处理事故</h3>
                <div className='last'></div>
                <Con>
                    <div className='info'>
                        {this.getList()}
                    </div>
                    <div className='img' style={{ background: `url(${this.props.obj.toJS().image}) no-repeat` }}></div>                    
                </Con>
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
        obj: state.getIn(['TrafficWidget', 'accidentDealObj']),
    }
}

export default connect(mapStateToProps, null)(AccidentDeal);
