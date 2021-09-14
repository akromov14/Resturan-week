import styled from "styled-components";


export const MenuWrapper = styled.div`
    background-color: #FFAD33;
    padding: 0 20px 0 20px;
    font-family: 'Anton', sans-serif;
    font-family: 'Karantina', cursive;
    .prosta-rasm{
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    .ubuntu-2{
        background-color: yellow;
        border-radius: 15px;
        box-shadow: 6px 6px 48px #00000078,
        -6px -6px 48px #FFFFFF26;;
      
    }
    .ipsum-1{
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        margin-top: 100px;
        text-align: center;
        color: black;
        font-weight: bold;
        font-size: 20px;
       
    }
    .ubuntu-22{
        background-color: red;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 6px 6px 48px #00000078,
        -6px -6px 48px #FFFFFF26;;
        transition: 1s;
        img{
            transition: 1s;
            &:hover{
                transform: 
                perspective(400px) 
                scaleZ(0.9) 
                translateZ(-30px);
            }
        }
        &:hover{
            /* transform: scale(1.1) */
            transform: 
            perspective(400px) 
            scaleZ(0.9) 
            translateZ(10px);
        }
    }
    .home-22{
        /* border-radius: 10px; */
        border-radius: 10px 0 15px 15px;
        margin: 0 auto !important;
        a{
            text-decoration: none;
        }
    }
    .center{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        
    }
    .menu-23{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 20px 0 20px 0;
       h1{
        text-shadow: 1px 1px 2px, 0 0 1em , 0 0 0.2em;
       }
    }

    @media screen and (max-width: 760px){
        .ipsum-1{
            margin-top: 0;
            font-size: 13px;
            color: black;
        }
        .ubuntu-2{
        }
        .ubuntu-22{
            img{
                width: 150px !important;
                height: 150px !important;
            }
        }
      
    }
    @media screen and (max-width: 554px){
        .ipsum-1{
            margin-top: 0;
            font-size: 13px;
            color: black;
        }
        .ubuntu-2{
            order: 1;
            border-radius: 50px 50px 0 0;
            margin-top: 10px;
            
        }
        .ubuntu-22{
            order: 2;
            border-radius: 0 0 50px 50px;
            img{
                width: 150px !important;
                height: 150px !important;
                &:hover{
                    transform: translateZ(30px);;
                }
            }
        }
      
    }
`;