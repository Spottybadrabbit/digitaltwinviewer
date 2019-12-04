import styled from 'styled-components'

export const WarnText = styled.div`
    z-index: 999;
    padding: 0px 30px 59px 30px;
    box-size: border-box;
    height         : calc(100% - 40px);
    // width          : 100%;
    font-size      : 16px;
    font-weight    : bold;

    .info {
        margin-top: 29px;
        display: flex;
        justify-content : space-between;
        color: #fff;

        &.active {
            color: #00CCFF;
        }
    }
`