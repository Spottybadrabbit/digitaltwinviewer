import styled from 'styled-components';
export const PropressContain = styled.div`
    width  : 100%;
    display: flex;
    height : calc(100% - 40px);

    .firstItem {
        width : 80%;
        height:100%;      
        overflow: hidden;
    }    

    .lastItem {
        width        : 20%;
        display      : flex;
        flex-wrap    : wrap;
        align-content: center;

        div {
            width      : 100%;
            display    : flex;
            margin     : 10px 0;
            align-items: center;

            .colorIcon1 {
                display     : inline-block;
                width       : 7px;
                height      : 7px;
                background  : rgba(71, 252, 255, 1);
                margin-right: 15px;

            }

            .colorIcon2 {
                display     : inline-block;
                width       : 7px;
                height      : 7px;
                background  : rgba(243, 28, 129, 1);
                margin-right: 15px;
            }
        }
    }
    
    .text {
        font-size  : 12px;
        font-weight: 400;
        color      : rgba(255, 255, 255, 1);
    }
`

export const PropressItem = styled.div`
    width          : 100%;
    display        : flex;
    justify-content: center;
    align-items    : center;

    .title {
        width      : 20%;
        margin-left: 28px;
        font-size  : 14px;
        font-weight: 400;
    }

    .propress {
        width        : 80%;
        display      : flex;
        flex-wrap    : wrap;
        align-content: center;

        .outPropress {
            width      : 100%;
            display    : flex;
            align-items: center;
            margin     : 10px 0;
        }

        .inPropress {
            width      : 100%;
            display    : flex;
            align-items: center;
            margin     : 10px 0;
        }

        .bgcolor {
            width        : 80%;
            background   : rgba(95, 138, 228, 0.3);
            border-radius: 5px;
            height       : 10px;
        }

        .bar1 {
            width        : 80%;
            background   : rgba(71, 252, 255, 1);
            border-radius: 5px;
            height       : 10px;
        }

        .bar2 {
            width        : 30%;
            background   : rgba(243, 28, 129, 1);
            border-radius: 5px;
            height       : 10px;
        }

        .text {
            width       : 20%;
            font-size   : 12px;
            font-weight : 400;         
            padding-left: 20px;
        }
    }
`