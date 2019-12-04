import styled from 'styled-components'

export const DivCon = styled.div`
    display:flex;  
    font-size:14px;
    font-weight:400;
    height:calc(100% - 40px);   
`
export const DivItem = styled.div`
    width:33.3%;
    height:100%;
    .up{
        height:80%!important;
        width:100%;
    }
    .down{
        height:20%;
        width:100%;
        text-align:center;
    }

    i{
        display:inline-block;
        margin-right:10px;
        width:6px;
        height:6px;       
        border-radius:50%;
    }

    .first{
        background:#33CBFB;
    }
    .second{
        background:#D72EFF;
    }
    .three{
        background:#F91B6D;
    }    
`