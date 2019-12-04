import styled from 'styled-components';
import kuangImg from '../../static/image/kuang.png';
export const WarpDiv = styled.div`
    box-sizing: border-box;
    position        : relative;
    width           : 100%;
    height          : 100%;
    border:1px solid rgba(77, 108, 122, 1);
    border-bottom: 0;
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
        border-right: 1px solid #02a6b5;
        right       : -1px;
        top         : -1px;
        position    : absolute;
        width       : 13px;
        height      : 13px;
        content     : "";
        border-top  : 1px solid #02a6b5;
    }

    h1 {
        height     : 60px;
        font-size  : 30px;
        font-family: PingFang SC;
        font-weight: bold;
        margin     : 0;
        text-align : center;
        line-height: 60px;
        background : rgba(24, 42, 47, .72);
    }
`
export const DivCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width  : 100%;
    height : calc(100% - 60px);

    .numCon {
        display: flex;
        justify-content: center;
        align-items: center;       
        width: 65%;
        padding:10px 0px;
        border:1px solid rgba(0,255,255,1);

        .numCon-item {
            background: url(${kuangImg}) no-repeat center center;
            width: 34px;
            height: 53px;
            margin-left: 20px;
            font-size:41px;
            font-weight:bold;
            color: #FFCC00;
            text-align: center;
        }
    }
`