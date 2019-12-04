import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../store/widgets/peopleStreamMonitoring/store/ActionCreators'
import { WarpDiv } from '../commonStyle';
import { DivCon } from './illegaPeopleStyle';

class illegaPeople extends Component {

    getList = () => {
        if(this.props.list.size) return
        return this.props.list.map((item, index) => {
            return <React.Fragment key={index}>
                <tr>
                    <td>{item.sex}</td>
                    <td>{item.hairstyle}</td>
                    <td>{item.coatType}</td>
                    <td>{item.coatColor}</td>
                    <td>{item.underClothesType}</td>
                    <td>{item.underClothesCOlor}</td>
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
        this.Stop();
    }

    render() {
        return (
            <WarpDiv>
                <h3>行人</h3>
                <div className='last'></div>
                <DivCon>
                    <table>
                        <thead className='head'>
                            <tr>
                                <th >性别</th>
                                <th>发型</th>
                                <th>上衣类型</th>
                                <th>上衣颜色</th>
                                <th>下衣类型</th>
                                <th>下衣颜色</th>
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
        list: state.getIn(['PeopleStreamMonitoring','IllegapeopleList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updataList: () => {
            dispatch(ActionCreators.updataIllegapeople())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(illegaPeople)
