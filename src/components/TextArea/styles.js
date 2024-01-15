import styled from "styled-components";


export const Container = styled.textarea`
    width: 100%;
    
    height: 274px;
    display: flex;
    align-items: center;
    
    background-color: ${({theme})=> theme.COLORS.GRAY_300};

    padding: 18px 16px;
    border-radius: 10px;
    margin-bottom: 8px;

    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;

    outline: none;

    resize: none;

    &::placeholder{
        font-size: 16px;
        font-weight: 400;
        color: ${({theme})=> theme.COLORS.GRAY_100};
    }
    
`;