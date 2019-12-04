import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/peopleStreamMonitoring/store/ActionCreators'
import echarts from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/line';
import { WarpDiv } from './illegalTrendStyle';

class IllegalTrend extends Component {
   
    componentDidMount() {
        this.props.updataOption()
        this.interval = setInterval(() => {
            this.props.updataOption()
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <span className='title'>近七天违法趋势</span>
                <div className='last'></div>
                <ReactEchartsCore
                    className='chart'
                    style={{width: '100%',height:'100%'}}              
                    echarts={echarts}
                    option={this.props.option}
                    notMerge={true}
                    lazyUpdate={true}
                />
                {/* 两个矩形占位 */}
                <div className='party-l'></div>
                <div className='party-r'></div>
            </WarpDiv>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        option: state.getIn(['PeopleStreamMonitoring', 'IllegalTrendOption'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updataOption: () => {
            dispatch(ActionCreators.updataIllegalTrend())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IllegalTrend)
