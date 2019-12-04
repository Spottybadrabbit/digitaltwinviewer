import React, { Component } from 'react';
import { WarpDiv } from '../commonStyle';
import illegal_img from '../../static/image/illegal_img.png';

export default class  extends Component {
    render() {
        return (
            <WarpDiv>
                <div style={{overflow:'hidden',width:'100%',height:'100%', background: `url(${illegal_img}) no-repeat center center`, backgroundSize:'100% 100%'}}>                                     
                </div>
            </WarpDiv>
        );
    }
};