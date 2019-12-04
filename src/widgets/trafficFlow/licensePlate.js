import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficFlow/store/ActionCreators';
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
            <WarpDiv >
                <h3>车牌类型</h3>
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
        option: state.getIn(['trafficFlow', 'licensePlate']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption() {
            dispatch(ActionCreators.updateLicensePlate());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);