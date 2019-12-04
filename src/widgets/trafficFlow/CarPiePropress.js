import React, { Component } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficFlow/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { DivCon, DivItem } from './CarPiePropressStyle'

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
                <h3>车辆类型</h3>
                <div className='last'></div>
                <DivCon>
                    <DivItem>
                        <ReactEchartsCore
                            className='up'
                            echarts={echarts}
                            option={this.props.option[0]}
                            notMerge={true}
                            lazyUpdate={true}
                        />
                        <div className='down'><i className='first'></i>通勤</div>
                    </DivItem>
                    <DivItem>
                        <ReactEchartsCore
                            className='up'
                            echarts={echarts}
                            option={this.props.option[1]}
                            notMerge={true}
                            lazyUpdate={true}
                        />
                        <div className='down'><i className='second'></i>营运</div>
                    </DivItem>
                    <DivItem>
                        <ReactEchartsCore
                            className='up'
                            echarts={echarts}
                            option={this.props.option[2]}
                            notMerge={true}
                            lazyUpdate={true}
                        />
                        <div className='down'><i className='three'></i>非营运</div>
                    </DivItem>
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
    if (state.getIn(['trafficFlow', 'carTypeOption']).size === 0) {
        return {
            option: [{}, {}, {}],
        }
    } else {
        return {
            option: state.getIn(['trafficFlow', 'carTypeOption']),
        }
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption() {
            dispatch(ActionCreators.updateCarType());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);