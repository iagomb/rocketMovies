import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    
    > a{
        display: flex; 
        align-items: center;
        /* justify-content: center; */
        color: ${({theme})=> theme.COLORS.RED}; 
        font-size: 16px;
        font-weight: 400;

        svg{
            margin-right: 8px;
            font-size: 16px;
        }
    }

`;