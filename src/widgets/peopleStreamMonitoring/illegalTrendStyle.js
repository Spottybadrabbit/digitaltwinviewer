import styled from 'styled-components';
export const WarpDiv = styled.div`
    box-sizing: border-box;
    position        : relative;
    width           : 100%;
    height          : 100%;
    border:1px solid rgba(77, 108, 122, 1);
    border-top: 0;
    background:rgba(24,42,47,0.4);
    color: #fff;

    >.last {
        position: absolute;
        left    : 0;
        bottom  : 0;
        width   : 100%;

        &:before {
            border-left  : 1px solid #02a6b5;
            left         : -1px;
            bottom       : -1px;
            position     : absolute;
            width        : 13px;
            height       : 13px;
            content      : "";
            border-bottom: 1px solid #02a6b5;
        }

        &:after {
            border-right : 1px solid #02a6b5;
            right        : -1px;
            bottom       : -1px;
            position     : absolute;
            width        : 13px;
            height       : 13px;
            content      : "";
            border-bottom: 1px solid #02a6b5;
        }
    }

    .title {
        position: absolute;
        left: 51px;
        top: 13px;
    }
    .party-l, .party-r {
        width: 11px;
        height: ${ 593 * 100 / 1080}vh; 
        position: absolute;
        background:rgba(24,42,47,0.4);
        top: ${-593 * 100 / 1080}vh;
    }
    .party-l {
        border-left:1px solid rgba(77, 108, 122, 1);
        left: -1px;
    }

    .party-r {
        border-right:1px solid rgba(77, 108, 122, 1);
        right: -1px;
    }
`

