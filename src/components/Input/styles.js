import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background-color: ${({theme})=> theme.COLORS.GRAY_300};

    padding: 18px 16px;
    border-radius: 10px;
    margin-bottom: 8px;

    > input {
        width: 100%;

        background: transparent;
        color: ${({theme})=> theme.COLORS.WHITE};

        border: none;

        outline: none;

        &::placeholder{
            font-size: 16px;
            font-weight: 400;
            color: ${({theme})=> theme.COLORS.GRAY_100};
        }
    }

    svg{
        color: ${({theme})=> theme.COLORS.GRAY_100};
        margin-right: 12px;
    }


`;