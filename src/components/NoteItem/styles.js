import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    max-width: max-content;

    border-radius: 10px;
   
    background-color: ${({theme, isNew})=> isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({theme})=>  theme.COLORS.GRAY_100};

    border: ${({theme, isNew})=> isNew ? `3px dashed ${theme.COLORS.GRAY_100}` : "none"};
    padding: 16px;

    > input{
        width: 100%;
        background-color: transparent;
        color: ${({theme, isNew})=>isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

        font-weight: 400;
        font-size: 16px;

        border: 0;
        outline: none;
    }

    > button{
        background-color: transparent;
        border: 0;
        svg{
            color: ${({theme})=> theme.COLORS.RED};
            font-size: 24px;
        }
    }
`;