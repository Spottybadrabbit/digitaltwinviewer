import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficLightTime/store/ActionCreators';
import * as ActionConstants from '../../store/widgets/trafficLightTime/store/ActionConstants';
import { WarpDiv } from '../commonStyle';

class ChartCon extends Component {

    componentDidMount() {
        this.props.updateOption();
        this.interval = setInterval(() => {
            this.props.updateOption()
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <h3>路口直行速度</h3>
                <div className='last'></div>
                <ReactEchartsCore
                    style={{ width: '100%', height: 'calc(100% - 40px)' }}
                    echarts={echarts}
                    option={this.props.option}
                    notMerge={true}
                    lazyUpdate={true}
                />
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
        option: state.getIn(['trafficLightTime', 'straightSpeedOption'])      
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption() {
            dispatch(ActionCreators.updateOption(ActionConstants.UPDATE_STRAIGHT_SPEED,'#14F71F'));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);

