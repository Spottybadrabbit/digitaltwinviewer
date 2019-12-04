import React, { Component } from 'react';
import { WarpDiv } from '../commonStyle';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/trafficControlCenter/store/ActionCreators';
import * as ActionConstants from '../../store/widgets/trafficControlCenter/store/ActionConstants';
import { DivCon, Table } from './suspiciousPersonStyle'

class SuspiciousComponent extends Component {

    getContent = () => {
        if (this.props.listAry.size === 0) {
            return null
        };
        let data = this.props.listAry.toJS()[0];
        return (
            <DivCon>
                <div className='up'>
                    <img src={data.img} alt='图片' />
                    <div className='infor'>
                        <div><span>事发路口</span><span>{data.addr}</span></div>
                        <div><span>事发时间</span><span>{data.time}</span></div>
                        <div><span>是否派人</span><span>{data.action}</span></div>
                        <div><span>解决情况</span><span>{data.status}</span></div>
                    </div>
                </div>
                <div className='down'>
                    <h4>可疑人员信息</h4>
                    <Table>
                        <div className='td'>
                            <span>姓名</span><span>{data.suspiciousPeople.name}</span>
                        </div>
                        <div className='td right'>
                            <span>性别</span><span>{data.suspiciousPeople.sex}</span>
                        </div>
                        <div className='td'>
                            <span>年龄</span><span>{data.suspiciousPeople.age}</span>
                        </div>
                        <div className='td right'>
                            <span>数据来源</span><span>{data.suspiciousPeople.dataSource}</span>
                        </div>
                        <div className='td idnumber'>
                            <span>身份证号</span><span>{data.suspiciousPeople.IDNumber}</span>
                        </div>
                        <div className='td last'>
                            <span>危险级别</span><span className='warning'>{data.suspiciousPeople.dangerLevel}</span>
                        </div>
                    </Table>
                </div>
            </DivCon>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.update(this.props.listAry);
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <h3>检测到可疑人员</h3>
                <div className='last'></div>
                {this.getContent()}
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
        listAry: state.getIn(['trafficControlCenter', 'suspiciousPeople'])
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        update(list) {
            dispatch(ActionCreators.updateContent(ActionConstants.UPDATE_SUSPICIOUS_PEOPLE, list));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuspiciousComponent);

