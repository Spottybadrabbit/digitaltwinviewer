import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WarpDiv } from '../commonStyle';
import { PropressContain, PropressItem } from './RoadSummaryStyle'
class ChartCon extends Component {
    
    getList = () => {
        return this.props.list.toJS().map((item, index) => {
            return <PropressItem key={index}>
                <div className='title'>{item.area}</div>
                <div className='propress'>
                    <div className='outPropress'>
                        <div className='bgcolor'>
                            <div className='bar1' style={{ width: item.outPercentage }}></div>
                        </div>
                        <div className='text'>{item.outPercentage}</div>
                    </div>
                    <div className='inPropress'>
                        <div className='bgcolor'>
                            <div className='bar2' style={{ width: item.enterPercentage }}></div>
                        </div>
                        <div className='text'>{item.enterPercentage}</div>
                    </div>
                </div>
            </PropressItem>
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
        let objList = document.getElementById('listConRoad1');

        this.controlSetInterval = setInterval(() => {
            this.ScrollUp(objBox,objList);
        }, 100);

        objBox.addEventListener('mouseover',()=>{          
            this.Stop();
        })
        objBox.addEventListener('mouseout',()=>{
            this.controlSetInterval = setInterval(() => {
                this.ScrollUp(objBox,objList);
            }, 100);
        })
    }

    componentWillUnmount() {
        this.Stop();
    }

    render() {
        return (
            <WarpDiv>
                <h3>道路概况</h3>
                <PropressContain>
                    <div className='firstItem' id='listBox'>
                        <div id='listConRoad1'>
                            {this.getList()}
                        </div>  
                        <div id='listBox'>
                            {this.getList()}
                        </div>                     
                    </div>
                    <div className='lastItem'>
                        <div>
                            <span className='colorIcon1'></span><span className='text'>外出人数</span>
                        </div>
                        <div>
                            <span className='colorIcon2'></span><span className='text'>进入人数</span>
                        </div>
                    </div>
                </PropressContain>
                <div className='last'></div>
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
        list: state.getIn(['trafficFlow', 'roadSummaryList']),
    }
}

export default connect(mapStateToProps, null)(ChartCon);