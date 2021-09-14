import styled from "styled-components";

export const FodWrapper = styled.div`
    text-align: center;
    font-family: 'Inconsolata', monospace;
    border-radius: 50px !important;
    background-color: #FFB319;
    margin-top: 160px;
    margin-bottom: 20px;
    cursor: pointer;
    
    img{
        height: 400px;
        object-fit: cover;
    }
    .title2{
        margin-bottom: 15px;
        color: white;
        text-shadow: 1px 1px 2px, 0 0 1em , 0 0 0.2em;
    }
    .soz{
        background-color: 	#ffff00;
        position: relative !important;
        border-radius: 15px 0 15px 15px;
        font-weight: bold !important;
        cursor: pointer;
        a{
            color: hsl(30, 100%, 50%);
            text-decoration: none;
        }
        color: white;
    }
    .food2{
        margin-top: 70px;
        color: white;
    }
    .style-123{
        height: 2px;
        width: 700px;
        background-color: red;
        position: absolute;
        clip-path: polygon(0 0, 42% 98%, 100% 48%);
    }

`;