import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/peopleStreamMonitoring/store/ActionCreators'
import echarts from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import { WarpDiv } from '../commonStyle';
import { DivCon } from './illegalTimeStyle';

class IllegalTime extends Component {

    componentDidMount() {
        this.props.updataOtion()
        this.interval = setInterval(() => {
            this.props.updataOtion()
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <h3>违法时间高发路段分布</h3>
                <div className='last'></div>
                <DivCon>
                <ReactEchartsCore
                    style={{width: '100%',height:'100%'}}              
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
const mapStateToProps = (state) => {
    return {
        option: state.getIn(['PeopleStreamMonitoring', 'IllegalTimeOption'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updataOtion: () => {
            dispatch(ActionCreators.updataIllegalTime())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IllegalTime)