import styled from 'styled-components';
import pic from '../../static/kepler.gl-logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    background-color: #29323C;
`;
export const Logo = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    width: 100px;
    height: 20px;
    display: block;
    background:url(${pic});
    background-size: contain;
    line-height: 60px;
    padding-left: 35px;
    &.l-h3{
        color: #ffffff;
        font-size: 12px;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 10px;
        }
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 10px;
    font-sixe: 17px;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #6A7485 !important;
    }
`;
export const NavName = styled.div`
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 14px;
    margin-left: 10px;
`;
export const NavWrapper = styled.div`
    border-bottom: 1px solid #3A414C;
    padding-bottom: 10px;
`;
export const SampleWrapper = styled.div`
    overflow-y: scroll;
    max-width: 70vw;
    max-height: 85vh;
    position: relative;
    left: 0px;
    right: 0px;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    font-size: 12px;
    color: rgb(106, 116, 133);
    top: 60px;
    padding: 24px 72px 40px;
    margin: 0px auto;
    border-radius: 4px;
    transition: all 0.4s ease 0s;
`;
export const SampleItem = styled.div`
    float: left;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
    border-radius: 4px;
    font-weight: 500;
    width: 30%;
    max-width: 480px;
    margin-bottom: 50px;
    .title{
        margin-top: 7px;
        margin-bottom: 0em;
    };
    .title-content{
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        color: rgb(58, 65, 76);
    };
`;
export const Img = styled.img`
    position: relative;
    left: -10px;
    top: -13px;
    float: left;
	height: 32px;
    border-radius: 4px;
    cursor: pointer;
`;