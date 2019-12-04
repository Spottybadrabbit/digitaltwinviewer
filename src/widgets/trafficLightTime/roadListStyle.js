import styled from 'styled-components'

export const ListWarp = styled.div`
    height:calc(100% - 40px);
  
    .head{
        font-size:14px;
        font-weight:500;
        display:flex;
        align-item:center;
        border-bottom:1px solid #626262;    
    }

    .body{
        height:calc(100% - 35px);
        padding-bottom:20px;
        box-sizing: border-box;      
        font-size:12px;
        font-weight:500;
        
        .list{
            height:100%;
            overflow:hidden;
        }

        .item-warp{
            display:flex;
            border-bottom:1px solid #626262;    
        } 
    }

    .item{
        width:15%;
        height:34px;
        line-height:34px;
        text-align:center;

        &.warn{
            color:#FFEB13;
        }
    }

    .first-item{
        width:55%;
        height:34px;
        line-height:34px;
        padding-left: 18px;
        text-align:left;
    }
`


