import styled from 'styled-components';
export const WarpDiv = styled.div`  
    box-sizing: border-box;
    position        : relative;
    width           : 100%;
    height          : 100%;
    font-family:PingFang SC;
    color:rgba(255,255,255,1);
    border:1px solid rgba(77, 108, 122, 1);
    background:rgba(24,42,47,0.4);

    &:before {
        border-left: 1px solid #02a6b5;
        left       : -1px;
        top        : -1px;
        position   : absolute;
        width      : 13px;
        height     : 13px;
        content    : "";
        border-top : 1px solid #02a6b5;
    }

    &:after {
        border-right: 1px solid #02a6b5;;
        right       : -1px;
        top         : -1px;
        position    : absolute;
        width       : 13px;
        height      : 13px;
        content     : "";
        border-top  : 1px solid #02a6b5;
    }

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

    h3 {
        height     : 40px;
        font-size  : 20px;
        font-family: PingFang SC;
        font-weight: 500;
        color      : rgba(255, 255, 255, 1);
        margin     : 0;
        text-align : center;
        line-height: 40px;
        background : rgba(24, 42, 47, .72);
    }
`


export const WarnText = styled.div`
    height         : calc(100% - 40px);
    width          : 100%;
    font-size      : 18px;
    font-weight    : bold;
    color          : rgba(255, 224, 15, 1);
    display        : flex;
    align-items    : center;
    justify-content: center;
`