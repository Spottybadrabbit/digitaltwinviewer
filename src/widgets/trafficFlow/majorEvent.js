import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficFlow/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { WarnText } from './majorEventStyle'
class MajorEvent extends Component {

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.updateOption(this.props.listAry)
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <WarpDiv>
                <h3>城市大型事件</h3>
                <div className='last'></div>
                <WarnText><span>{this.props.listAry.toJS()[0].name}</span></WarnText>
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
        listAry: state.getIn(['trafficFlow', 'majorEventList']),
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption(list) {
            dispatch(ActionCreators.updateMajorEvent(list));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MajorEvent);