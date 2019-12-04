import styled from 'styled-components'

export const ChartWarp = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
    .item{
        width:${177 * 100 / 1080}vh!important;
        height:${177 * 100 / 1080}vh!important;
        background:rgba(0,0,0,1);
        opacity:0.6;
        border-radius:50%;
        margin:10px;
    }

    .middleItem{
        height:${205 * 100 / 1080}vh!important;
        width: ${205 * 100 / 1080}vh!important;
        background:rgba(0,0,0,1);
        opacity:0.6;
        border-radius:50%;
        margin:10px;
    }
`