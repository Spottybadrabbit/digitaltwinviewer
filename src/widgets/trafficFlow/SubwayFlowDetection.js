import React, { Component } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficFlow/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { DivCon } from './SubwayFlowDetectionStyle';
import img1 from '../../static/image/subway_img1.png';
import img2 from '../../static/image/subway_img2.png';
import img3 from '../../static/image/subway_img3.png';
import img4 from '../../static/image/subway_img4.png';

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
                <h3>地铁实时流量监控</h3>
                <div className='last'></div>
                <DivCon>
                    <div className='imgShow'>
                        <div className='item'>
                            <img src={img1} alt='图片'></img>
                            <span>北大街</span>
                        </div>
                        <div className='item'>
                            <img src={img2} alt='图片'></img>
                            <span>五路口</span>
                        </div>
                        <div className='item'>
                            <img src={img3} alt='图片'></img>
                            <span>通化门</span>
                        </div>
                        <div className='item'>
                            <img src={img4} alt='图片'></img>
                            <span>小寨</span>
                        </div>
                    </div>
                    <div className='chartCon'>
                        <ReactEchartsCore
                            style={{ width: '100%', height: '100%' }}
                            echarts={echarts}
                            option={this.props.option}
                            notMerge={true}
                            lazyUpdate={true}
                        />
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
        option: state.getIn(['trafficFlow', 'subwayFlowOption']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption() {
            dispatch(ActionCreators.updateSubwayFlow());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartCon);