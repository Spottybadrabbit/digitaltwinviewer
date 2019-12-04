import styled from 'styled-components'
export const DivCon = styled.div`
    height:calc(100% - 40px);
    display:flex;
    flex-wrap:wrap;
    align-content:space-between;
    font-size:16px;
    font-weight:400;
    padding:0 30px;    
`

export const Item = styled.div`
    width:100%;
    height:10%;        
    display:flex;
    justify-content:space-around;
    align-items:center; 

    span:nth-child(1){
        width:30%;
    }

    .progress{
        width:50%;
        height:100%;     
        display:flex;
        align-items:center;
        .background{
            background-image: linear-gradient(to right, rgba(24, 42, 47, 0.7), rgba(0, 255, 255, 0.82));         
            border-radius: 4px;
            height:8px;
        }
    }
    
    span:nth-child(3){
        width:20%;
        text-align:right;
    }
`