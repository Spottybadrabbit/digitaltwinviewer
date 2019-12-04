import styled from 'styled-components';
export const Con = styled.div`   
    padding: 10px 30px;
    height : calc(100% - 40px);
    box-sizing: border-box;   
    font-size: 14px;
    color: #fff;
    position:relative;
    
    .info {
        width:57%;
        height:100%;
        display: flex;
        flex-wrap    : wrap;
        align-content: center;

        .info-item {
            display: flex;
            align-items: center;
            width:100%;
            height:12.5%;
            span:last-child {
                margin-left: 20px;
            }
        }
    }

    .img{
        position:absolute;
        width:${200 * 100 / 1080}vh;   
        height: ${200 * 100 / 1080}vh;        
        top: 50%; 
        right:20px;
        transform:translate(0%, -50%)!important;                                
        background-size:100% 100%!important;   
    }
    
`