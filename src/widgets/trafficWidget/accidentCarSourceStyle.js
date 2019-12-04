import styled from 'styled-components'
export const PropressContain = styled.div`
    width  : 100%;
    height : calc(100% - 40px);
`
export const PropressItem = styled.div`
    margin-top: 15px;
    width          : 100%;
    display: flex;
    align-items: center;
    color: #fff;

    .title {
        width: 100px;
        font-size: 16px;
    }

    .propress {
        display: flex;
        align-items: center;
        margin: 0 16px 0 30px;
        width: 256px;

        .bgColor1 {
            height: 8px;
        }

    }

    .number {
        margin-left: 15px;
        font-size: 14px;
    }

    .text {
        font-size: 18px;
    }
`