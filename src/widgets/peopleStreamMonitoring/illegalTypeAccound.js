import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/peopleStreamMonitoring/store/ActionCreators'
import echarts from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legendScroll';
import { WarpDiv } from '../commonStyle';

class IllegalTypeAccound extends Component {
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
                <h3>违法类型占比</h3>
                <div className='last'></div>
                <ReactEchartsCore
                    style={{width: '100%',height:'calc(100% - 40px)'}}              
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
        option: state.getIn(['PeopleStreamMonitoring','IllegalTypeAccoundOption'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updataOption: () => {
            dispatch(ActionCreators.updataIllegalTypeAccound())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IllegalTypeAccound)