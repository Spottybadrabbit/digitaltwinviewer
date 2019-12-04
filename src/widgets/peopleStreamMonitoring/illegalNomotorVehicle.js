import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/peopleStreamMonitoring/store/ActionCreators'
import { WarpDiv } from '../commonStyle';
import { DivCon } from './illegalNomotorVehicleStyle';

class IllegNomotorVehicle extends Component {

    getList = () => {
        if(this.props.list.size) return
        return this.props.list.map((item, index) => {
            return <React.Fragment key={index}>
                <tr>
                    <td>{item.sex}</td>
                    <td>{item.carType}</td>
                    <td>{item.load}</td>
                    <td>{item.ceiling}</td>
                    <td>{item.tire}</td>
                    <td>{item.time}</td>

                </tr>
            </React.Fragment>
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
                <h3>非机动车</h3>
                <div className='last'></div>
                <DivCon>
                    <table>
                        <thead className='head'>
                            <tr>
                                <th>性别</th>
                                <th>车型</th>
                                <th>载荷</th>
                                <th>顶棚</th>
                                <th>头饰</th>
                                <th>时间</th>
                            </tr>
                        </thead>
                        <tbody className='body' id='listBox'>
                            {this.getList()}
                        </tbody>
                    </table>
                </DivCon>
            </WarpDiv>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['PeopleStreamMonitoring', 'IllegNomotorVehicleList'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updataList: () => {
            dispatch(ActionCreators.updataIllegNomotorVehicle())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IllegNomotorVehicle)