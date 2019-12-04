import styled from 'styled-components'

export const DivCon = styled.div`   
    font-size:14px;
    font-weight:400;
    height:calc(100% - 40px); 
    display:flex;
    .chart{
        height:100%;
        width:80%;
    }
    .marke{
        width:20%;
        height:30%;        
        display:flex;
        flex-wrap:wrap;
        align-content:space-around;
        font-size:12px;
        font-weight:400;
        i{           
            display:inline-block;
            margin-right:3px;
            width:6px;
            height:6px;
           }   

        .error{ 
            width:100%; 
            margin-right:10px;
           .first{
            background:#F3124C;
            }
            .second{
                background:#BA0D5F;
            }
            .three{
                background:#A4052E;       
            }
        }

        .warning{ 
            width:100%;   
            margin-right:10px;           
            .first{
                background:#FFE00F;
            }
            .second{
                background:#D7C500;
            }
            .three{
                background:#C7A002;       
            }
        } 

         .general{
            width:100%; 
            margin-right:10px;            
            .first{
                background:#47FCFF;
            }
            .second{
                background:#10BCBF;
            }
            .three{
                background:#129193;       
            }
        }     
       
    }
`
