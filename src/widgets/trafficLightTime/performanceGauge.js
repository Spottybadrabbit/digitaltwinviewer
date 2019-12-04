import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficLightTime/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { ChartWarp } from './performanceGaugeStyle';

class ChartCon extends Component {

    componentDidMount() {
        this.props.updateOption(this.props.count);
        this.interval = setInterval(() => {
            let count = this.props.count + 1
            this.props.updateOption(count)
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <div className='last'></div>
                <ChartWarp >
                    <ReactEchartsCore
                        className='item'
                        echarts={echarts}
                        option={this.props.option[0]}
                        notMerge={true}
                        lazyUpdate={true}
                    />
                    <ReactEchartsCore
                        className='middleItem'
                        echarts={echarts}
                        option={this.props.option[1]}
                        notMerge={true}
                        lazyUpdate={true}
                    />
                    <ReactEchartsCore
                        className='item'
                        echarts={echarts}
                        option={this.props.option[2]}
                        notMerge={true}
                        lazyUpdate={true}
                    />
                </ChartWarp>
            </WarpDiv>
        )
    }

}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    if (state.getIn(['trafficLightTime', 'performanceGauge']).size === 0) {
        return {
            option: [{}, {}, {}],
            count:state.getIn(['trafficLightTime', 'count']),
        }
    } else {
        return {
            option: state.getIn(['trafficLightTime', 'performanceGauge']),
            count:state.getIn(['trafficLightTime', 'count']),
        }
    }  
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption(count) {
            dispatch(ActionCreators.updatePerformanceGauge(count));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);


