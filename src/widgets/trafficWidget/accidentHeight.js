
import React, { Component } from 'react';
import { connect } from 'react-redux';
import echarts from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';

import * as ActionCreators from '../../store/widgets/trafficWidget/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { DivCon } from './accidentHeightStyle';

class AccidentHeight extends Component {

    componentDidMount() {
        this.props.updateOption()
        this.interval = setInterval(() => {
            this.props.updateOption()
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    } 

    render() {
        return (
            <WarpDiv>
                <h3>月事故高发路段</h3>
                <div className='last'></div>
                <DivCon>
                    <ReactEchartsCore
                        style={{ width: '100%', height: '100%' }}
                        echarts={echarts}
                        option={this.props.option}
                        notMerge={true}
                        lazyUpdate={true}
                    />
                </DivCon>
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
      option:state.getIn(['TrafficWidget', 'accidentHeightOption']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps=(dispatch)=>{
    return {
        updateOption(){
            dispatch(ActionCreators.updateAccidentHeight());
        },     
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AccidentHeight);