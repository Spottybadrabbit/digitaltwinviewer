import React, { Component } from 'react';
import { connect } from 'react-redux';
import echarts from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legendScroll';

import * as ActionCreators from '../../store/widgets/trafficWidget/store/ActionCreators';
import { WarpDiv } from '../commonStyle';

class AccidentLevel extends Component {
   
    componentDidMount() {
        this.props.updateOption()
        this.interval = setInterval(()=>{
            this.props.updateOption()
        },3000)
    }

    render() {
        return (
            <WarpDiv>
                <h3>月事故等级占比</h3>
                <div className='last'></div>
                <ReactEchartsCore
                    style={{width: '100%',height:'100%'}}              
                    echarts={echarts}
                    option={this.props.option}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </WarpDiv>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        option: state.getIn(['TrafficWidget','accidentLevelOption'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption: () => {
            dispatch(ActionCreators.updateAccidentLevel());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccidentLevel)