import styled from "styled-components";


export const ImgWrapper = styled.div`
    img {
        height: 400px !important;
       
    }
    .tabiat{
        object-fit: cover;
        width: 400px;
        height: 400px !important;
        clip-path: polygon(0 0, 0% 100%, 100% 100%);
      
    }
    .Resturan{
        object-fit: cover;
        width: 400px;
        height: 400px !important;
        clip-path: polygon(0 0, 100% 0, 100% 100%);
        margin-left: 20px !important;
    }
`;