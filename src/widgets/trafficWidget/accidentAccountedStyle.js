import styled from 'styled-components'
export const PropressContain = styled.div`
    width  : 100%;
    height : calc(100% - 40px);
    box-sizing: border-box;       
    display      : flex;
    flex-wrap    : wrap;
    align-content: center;
`
export const PropressItem = styled.div`  
    width          : 100%;
    display        : flex;
    align-items: center;
    color: #fff;
    height:18%;
    .title {
        width: 100px;
        font-size: 16px;
    }

    .propress {
        display: flex;
        align-items: center;
        margin: 0 16px 0 30px;
        width: 256px;

        .bgColor1{
            height: 8px;
            background:linear-gradient(90deg,rgba(24,42,47,0.7) 0%,rgba(0,255,255,0.82) 41%);
            border-radius: 4px 4px 4px 4px;
        }
    }

    .text {
        font-size: 14px;
    }
`