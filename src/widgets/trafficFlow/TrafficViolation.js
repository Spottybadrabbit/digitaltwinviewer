import React, { Component } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficFlow/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { DivCon } from './TrafficViolationStyle';

 class ChartCon extends Component {

    componentDidMount() {
        this.props.updateOption()
        this.interval = setInterval(() => {
            this.props.updateOption()
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv >
                <h3>常见交通违规项目</h3>
                <div className='last'></div>
                <DivCon >
                    <div className='chart'>
                        <ReactEchartsCore
                            style={{ width: '100%', height: '100%' }}
                            echarts={echarts}
                            option={this.props.option}
                            notMerge={true}
                            lazyUpdate={true}
                        />
                    </div>
                    <div className='marke'>
                        <div className='error'>
                            <i className='first'></i>
                            <i className='second'></i>
                            <i className='three'></i>
                            严重违规
                        </div>
                        <div className='warning'>
                            <i className='first'></i>
                            <i className='second'></i>
                            <i className='three'></i>
                            一般违规
                        </div>
                        <div className='general'>
                            <i className='first'></i>
                            <i className='second'></i>
                            <i className='three'></i>
                            轻度违规
                        </div>
                    </div>
                </DivCon>
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
        option: state.getIn(['trafficFlow', 'trafficViolationOption']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption() {
            dispatch(ActionCreators.updateTratticViolation());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);