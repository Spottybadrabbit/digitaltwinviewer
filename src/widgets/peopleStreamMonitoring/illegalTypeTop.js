import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/peopleStreamMonitoring/store/ActionCreators'
import { WarpDiv } from '../commonStyle';
import { PropressContain, PropressItem } from './illegalTypeTopStyle';

class IllefalTypeTop extends Component {

    getList = () => {
        if (this.props.size) return
        return this.props.list.map((item, index) => {
            return <PropressItem key={index}>
                <div className='title'>
                    <span style={{ color: '#47FCFF', fontSize: '14px', marginRight: '16px' }}>0{index + 1}</span>
                    <span>{item.name}</span>
                </div>
                <div className='propress'>
                    <div className='bgColor1' style={{ width: item.outPercentage }}></div>
                </div>
                <div className='text'>{item.number}</div>
            </PropressItem>
        })
    }

    componentDidMount() {
        this.props.updataList()
        this.interval = setInterval(() => {
            this.props.updataList()
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <h3>违法类型 TOP5</h3>
                <div className='last'></div>
                <PropressContain>
                    {this.getList()}
                </PropressContain>
            </WarpDiv>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.getIn(['PeopleStreamMonitoring', 'IllefalTypeTopList'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updataList: () => {
            dispatch(ActionCreators.updataIllefalTypeTop())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IllefalTypeTop)