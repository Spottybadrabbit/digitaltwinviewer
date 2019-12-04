import styled from 'styled-components'
export const DivCon = styled.div`
    height:calc(100% - 40px);
    padding:20px 30px;
    box-sizing: border-box;
    color:rgba(242,242,242,1);
    display:flex;     
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
`