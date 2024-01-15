import styled from "styled-components";

import backgroundImg from '../../assets/bg.png'

export const Container = styled.div`
    width: 100%; 
    display: flex;
`;

export const Form = styled.form`
    max-width: 637px;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    padding: 0 134px;

    h1{
        font-size: 48px;
        font-weight: 700;

        color: ${({theme})=> theme.COLORS.RED};
    }

    p{
        font-size: 14px;
        font-weight: 400;

        color: #CAC4CF;
    }

    h2{
        margin: 48px 0;
        color: ${({theme})=> theme.COLORS.WHITE};

    }
    button{
        margin-top: 16px;
        padding: 16px 126px;
    }

    a{
        margin-top: 42px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;