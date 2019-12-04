import styled from 'styled-components'
export const PropressContain = styled.div`
    width  : 100%;
    height : calc(100% - 40px);
    padding: 20px 30px;
    box-sizing: border-box; 
    display:flex;
    flex-wrap:wrap;
    align-content:space-between;

`
export const PropressItem = styled.div`   
    width          : 100%;
    height:20%;
    display        : flex;
    align-items: center;    
    color: #fff;

    .title {
        width: 120px;
        font-size: 14px;
    }

    .propress {
        display: flex;
        align-items: center;
        margin: 0 16px 0 30px;
        width: 180px;
        background:rgba(41,77,153,0.3);
        border-radius: 5px;

        .bgColor1{
            height: 10px;
            background-color: #47FCFF;
            border-radius: 5px;
        }
    }

    .text {
        font-size: 14px;
    }
`