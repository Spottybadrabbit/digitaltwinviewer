import styled from 'styled-components'

export const DivCon = styled.div`   
    font-size:14px;
    font-weight:400;
    height:calc(100% - 40px);    
    
    .up{
        height:80%!important;
        width:100%;
    }
    .down{
        height:20%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    span{
        margin:0 10px;
    }

    i{
        display:inline-block;
        margin-right:10px;
        width:6px;
        height:6px;       
        border-radius:50%;
    }

    .first{
        background:#45F4F7;
    }
    .second{
        background:#126AF7;
    }
    .three{
        background:#D12EF7;
    } 
    .four{
        background:#F51B71;
    } 
`
