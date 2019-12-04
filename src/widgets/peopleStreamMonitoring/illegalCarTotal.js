import React, { Component } from 'react';
import { WarpDiv, DivCon } from './illegalCarTotalStyle';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 12345,
            numberArr: []
        }
    }

    componentDidMount() {
        this.setState({
            numberArr: this.state.number.toString().split('')
        })
        this.interval = setInterval(() => {
            this.setState({
                number:Math.floor(Math.random() * 100 + 1000),
                numberArr: this.state.number.toString().split('')
            })
        }, 3000); 
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <WarpDiv>
                <h1 style={{ color: '#00FFFF' }}>本月车辆违法总量</h1>
                <DivCon>
                    <div className='numCon'>
                        {
                            this.state.numberArr.map((item, index) => {
                                return <div className='numCon-item' key={index}>{item}</div>
                            })
                        }
                    </div>
                </DivCon>
            </WarpDiv>
        );
    }
};