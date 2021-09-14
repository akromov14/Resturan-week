import styled from "styled-components";

export const FoodWrapper = styled.div`
    margin-top: 160px;
    text-align: center;
    font-family: 'Inconsolata', monospace;
    background-color: #FFB319;
    border-radius: 0 0 50px 50px !important;
    img{
        height: 400px;
        object-fit: cover;
    }
    .title{
        margin-bottom: 15px;
        color: white;
        text-shadow: 1px 1px 2px, 0 0 1em , 0 0 0.2em;
        cursor: pointer;
    }
    .food{
        margin-top: 70px;
        color: white;
        cursor: pointer;
    }
    .style-12{
        height: 2px;
        width: 700px;
        background-color: red;
        position: absolute;
        clip-path: polygon(0 0, 42% 98%, 100% 48%);
    }
    .Keyingi{
        text-decoration: none;
       
    }
    .keyingi-2{
        border-radius: 15px 0 15px 15px;
    }
    @media screen and (max-width: 700px){
        margin-top: 60px;
        .food{
            margin-bottom: 20px;
            margin-top: 250px;
        }
        .alice-1{
            order: 2;
        }
        .alice-2{
            order: 1;
        }
    }
`;