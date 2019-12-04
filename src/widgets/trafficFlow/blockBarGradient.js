import React, { Component } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficFlow/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { DivCon } from './blockBarGradientStyle';

class ChartCon extends Component {
    
    componentDidMount() {
        this.props.updateOption()
        this.interval = setInterval(()=>{
            this.props.updateOption()
        },3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    render() {       
        return (
            <WarpDiv >
                <h3>拥堵变化</h3>
                <div className='last'></div>
                <DivCon >
                    <ReactEchartsCore
                        className='up'
                        echarts={echarts}
                        option={this.props.option}
                        notMerge={true}
                        lazyUpdate={true}
                    />
                    <div className='down'>
                        <span><i className='first'></i>畅通</span>
                        <span><i className='second'></i>缓行</span>
                        <span><i className='three'></i>拥挤</span>
                        <span><i className='four'></i>拥堵</span>
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
      option:state.getIn(['trafficFlow', 'blockBarGradientOption']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps=(dispatch)=>{
    return {
        updateOption(){
            dispatch(ActionCreators.updateBlockBarGradient());
        },     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);