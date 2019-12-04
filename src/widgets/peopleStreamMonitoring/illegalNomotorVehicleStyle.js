import styled from 'styled-components'
export const DivCon = styled.div`
    diplay: flex;
    justify-content: center;
    width  : 100%;
    height : calc(100% - 40px);
    overflow: hidden;

    table th, table td{
        height: 26px;
        line-height: 26px;
    }
    
    table {
        border: none;
        margin-top: 10px;
        border-collapse:collapse;  
        border-spacing:0px; 
        width:100%;
        color: #fff;
        text-align: center;

        .head {      
            background:rgba(0,0,0,0.36);
            font-size: 13px;
            font-weight: 500;
        }

        .body {
            width: 100%;
            font-size: 12px;
            font-weight: 400;

            tr:nth-child(even) {
                background:rgba(0,0,0,0.36);
            }
        }   
    }

    // table tbody {
    //     display: block;
    //     height: 195px;
    //     overflow-y: scroll;
    // }
 
    // table thead,
    // tbody tr {
    //     display: table;
    //     width: 100%;
    //     table-layout: fixed;
    // }
 
    // table thead { 
    //     width: 100%
    // }
`