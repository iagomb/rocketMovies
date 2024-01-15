import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border: 0;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled{
        opacity: .5;
    }
`;