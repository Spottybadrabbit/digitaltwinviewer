import styled from 'styled-components'
export const DivCon = styled.div`
    height:calc(100% - 40px);
    padding:20px 30px 5px;
    box-sizing: border-box;
    color:rgba(242,242,242,1);
    display:flex;
    flex-wrap: wrap;   
    .up{
        width:100%;
        height:calc(100% - 148px);      
        display:flex;
        box-sizing: border-box;
        img{           
            border:1px dashed #ccc;
            height:100%;                         
        }
        .infor{          
            padding-left:10px;

            div{
                width:100%;              
                padding:5px 0;
                font-size:14px;              
                font-weight:400;

                span:nth-child(2){
                    margin-left:20px;              
                    color:rgba(255,204,0,1);
                }  
            }            
        }
    }
    .down{
        box-sizing: border-box;
        padding-top:15px;
        height:133px;        
        width:100%;       
        h4{
            margin: 0;           
            font-size:16px;
            font-weight:400;           
        }        
    }
`

export const Table = styled.div`
    box-sizing: border-box;
    .td{       
        display:inline-block;
        padding:2px 5px;
        width:50%;
        box-sizing: border-box;
        border-top:1px solid #B5B5B5;
        border-left:1px solid #B5B5B5;
        font-size:14px;
        font-weight:400;
        color:rgba(242,242,242,1);
        &.idnumber{
            width:100%;
            border:1px solid #B5B5B5;
        }

        &.right{
            border-right:1px solid #B5B5B5;
        }

        &.last{
            border-right:1px solid #B5B5B5;
            border-bottom:1px solid #B5B5B5;
            border-top:none;
        }

        span:nth-child(2){
            margin-left:20px;              
            color:#02F7F7;
        }

        .warning{
            color:#FFCC00 !important;
        }
    }   
`


