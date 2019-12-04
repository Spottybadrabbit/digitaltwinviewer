import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficControlCenter/store/ActionCreators';
import { WarpDiv } from '../commonStyle';
import { DivCon, Item } from './busLoadStyle';

class ListComponent extends Component {

    getList = () => {
        if(this.props.listAry.size ===0){
            return null
        };

        return this.props.listAry.map((item, index) => {
            return (
                <Item key={index}>
                    <span>{item.name}</span>
                    <div className="progress">
                        <div className='background' style={{ width: (item.value / item.baseData * 100) + '%' }}></div>
                    </div>
                    <span>{item.value}</span>
                </Item>
            )
        })
    }

    componentDidMount() {
        this.props.updateOption();
        this.interval = setInterval(() => {
            this.props.updateOption();
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <h3>公共运行载荷情况Top10</h3>
                <div className='last'></div>
                <DivCon>
                    {this.getList()}
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
        listAry: state.getIn(['trafficControlCenter', 'busTopList'])
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        updateOption() {
            dispatch(ActionCreators.updateBusSort());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);


