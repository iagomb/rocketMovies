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

    a{ 
        text-decoration: none;
    }

    main{
        > .header {
                max-width: 1116px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            > h1{
                color: ${({theme})=> theme.COLORS.WHITE};
                font-size: 36px;
                font-weight: 500;
                
                margin-block: 24px;
            }
            > a{
                
                display: flex;
                width: 208px;

                background-color: ${({theme})=> theme.COLORS.RED};
                color: ${({theme})=> theme.COLORS.BACKGROUND_900};
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2.6px;
                font-size: 16px;
                font-weight: 400;
                padding: 14px 32px;

                border-radius: 8px;
            }
        } 
    }
`;

export const Content = styled.div`
    grid-area: content;
    max-width: 69.62rem;
    height: 70vh;

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

    ul {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }    
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    span{
        background-color: ${({theme})=> theme.COLORS.TEXTBUTTON};
    }
`;


