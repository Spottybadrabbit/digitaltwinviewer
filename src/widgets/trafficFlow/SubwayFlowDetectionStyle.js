import styled from 'styled-components'

export const DivCon = styled.div`   
    font-size:14px;
    font-weight:400;
    height:calc(100% - 40px);    
    .imgShow{
        height:60%;
        width:100%;    
        display:flex;
        flex-wrap    : wrap; 
        justify-content:center; 
        box-sizing: border-box;
        padding-top:10px;                           
        .item{
            width:40%; 
            height:50%;                 
            display:flex;
            flex-wrap    : wrap;          
            justify-content:center;
            box-sizing: border-box;                   
            img{
                height:calc(100% - 20px);
            }
            span{
                height:20px;
                display:block;
                width:100%;        
                font-size:14px;
                font-weight:400;
                text-align:center;               
            }          
        }
    }
    .chartCon{
        height:40%;
        width:100%;
    }    
`
