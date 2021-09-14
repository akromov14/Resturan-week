import styled from "styled-components";

export const Glava = styled.div`

.glavRestu{
    height: 150px;
    margin-top: 7px;
    padding: 0 10px 0 10px;
    img {
        height: 300px;
        width: 1500px;
        object-fit: cover;
        border-radius: 15px;
        
        /* clip-path: polygon(0 0, 42% 98%, 100% 48%); */
        /* clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 51%, 60% 100%, 60% 80%, 0% 80%); */
        /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
        opacity: 0.8;
        transition: 1s;
        &:hover{
            opacity: 1;
        }
    }
}
  
`;