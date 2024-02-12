import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    overflow: hidden;

    display: grid;
    grid-template-rows: 116px auto;

    grid-template-areas: 
    "header"
    "content";

    footer{
        display: flex;
        gap: 40px;
        button{
            padding: 16px;
            background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
            color: ${({theme})=> theme.COLORS.RED};
        }

    }
`;

export const Form = styled.form`
    grid-area: content;
    max-width: 69.62rem;
    height: 75vh;

    overflow: auto;
    padding-right: 24px;
    margin: 40px auto;
    &::-webkit-scrollbar {
        width: 12px;              /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${({theme})=> theme.COLORS.RED};
        border-radius: 8px;
    }

    > .title {
        > h1{
            color: ${({theme})=> theme.COLORS.WHITE};
            font-size: 36px;
            font-weight: 500;
            
            margin-block: 24px;
        }
    }  
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    div{
        display: flex;
        align-items: center;
        gap: 40px;
        
        input{
            width: 100%;
        }
    }

`;

export const Tags = styled.div`

    h3{
        color: #999591;
        font-size: 20px;
        font-weight: 400;
        margin-block: 40px 24px;
    }
    > div{
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        padding: 16px;
        background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
        border-radius: 8px;
        margin-bottom: 40px;
    }
`;

