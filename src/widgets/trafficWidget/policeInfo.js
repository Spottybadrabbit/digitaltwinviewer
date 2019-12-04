import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WarpDiv } from '../commonStyle';
import { WarnText } from './policeInfoStyle';
class PoliceInfo extends Component {
    getList = () => {
        return this.props.list.toJS().map((item, index) => {
            return <div key={index} className={item.active ? 'active' : 'info'}>
                <span>{item.name}</span>
                <span>{item.time}</span>
            </div>
        })
    }

    ScrollUp = (objBox, objList) => {
        if (objBox.scrollTop >= objList.scrollHeight) {
            objBox.scrollTop = 0;
        } else
            objBox.scrollTop++;
    }

    Stop = () => {
        clearInterval(this.controlSetInterval);
    }

    componentDidMount() {
        let objBox = document.getElementById('listBox');
        let objList = document.getElementById('listInfo');

        this.controlSetInterval = setInterval(() => {
            this.ScrollUp(objBox, objList);
        }, 100);

        objBox.addEventListener('mouseover', () => {
            this.Stop();
        })
        objBox.addEventListener('mouseout', () => {
            this.controlSetInterval = setInterval(() => {
                this.ScrollUp(objBox, objList);
            }, 100);
        })
    }

    componentWillUnmount() {
        this.Stop();
    }

    render() {
        return (
            <WarpDiv>
                <h3>交通事故实时报警</h3>
                <div className='last'></div>
                <WarnText id='listBox'>
                    <div id='listInfo'>
                        {this.getList()}
                    </div>
                    <div>
                        {this.getList()}
                    </div>
                </WarnText>
            </WarpDiv>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['TrafficWidget', 'trafficPoliceList']),
    }
}

export default connect(mapStateToProps, null)(PoliceInfo);