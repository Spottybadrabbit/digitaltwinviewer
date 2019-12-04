import styled from 'styled-components';
export const WarnText = styled.div`
    z-index: 999;
    padding: 0 30px;
    box-sizing: border-box;
    height         : calc(100% - 40px);
    width          : 100%;
    overflow: hidden;
    font-size      : 16px;
    font-weight    : bold;

    .info, .active {
        margin-top: 29px;
        display: flex;
        justify-content : space-between;
        color: #fff;
    }
    .active {
        color: #00CCFF;
    }
`