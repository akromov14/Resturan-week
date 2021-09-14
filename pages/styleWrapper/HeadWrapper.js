import styled from "styled-components";
 

export const HeadWrapper = styled.div`
    text-align: center;
    margin-top: 50px;
    display: block;
    color: white;
    font-family: 'Inconsolata', monospace;
   

    .text{
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        flex-direction: column;
        margin-top: 60px;
        position: relative;
    }

    button{
        border-radius: 20px;
        width: 150px;
        height: 40px;
        border: none;
        outline: none;
    }
    .me{
        background-color: #c5c7c9;
    }
    .menga{
        margin-left: 10px;
        background-color: #F4A520;
        color: wheat;
        font-weight: bold;
    }
    .object-center{
        height: 400px !important;
    }
    .section11{
        box-sizing: border-box;
        min-height: 90vh;
        background-image: url("bg2.jpg");
        background-size: cover;
        padding: 120px 0;
        color: green;
    }
    .section1{
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
        padding: 120px 0;
    }
    img{
        object-fit: cover;
    }

    @media screen and (max-width: 700px){
        margin-top: 0 !important;
        .logoGl{
            width: 400px !important;
            height: 400px !important;
            display: none;
        }
     
    }
`;
