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

    header{
        padding: 64px 144px;
        background-color: rgba(255, 133, 155, 0.05);

        > a{
            color: ${({theme})=> theme.COLORS.RED};
            text-decoration: none;

            display: flex;
            align-items: center;

            font-size: 16px;
            font-weight: 400;
            
            svg{
                font-size: 16px;
                
                margin-right: 8px;
            }
        }
    }
`;

export const Content = styled.main`
    grid-area: content;
    max-width: 69.62rem;
    height: 75vh;
    margin: 40px auto 0;
    overflow: auto;
    padding-right: 24px;

    &::-webkit-scrollbar {
        width: 12px;              /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${({theme})=> theme.COLORS.RED};
        border-radius: 8px;
    }

    > .title {
        display: flex;
        align-items: center;
        gap: 19px;

        > h1{
            color: ${({theme})=> theme.COLORS.WHITE};
            font-size: 36px;
            font-weight: 500;
            
            margin-block: 24px;
        }

        > div{
            display: flex;
            gap: 10px;

        }
    }

    .info{
        display: flex;
        align-items: center;
        gap: 8px;
        >div{
            display: flex;
            align-items: center;
            gap: 8px;

            img{
                width: 16px;
                height: 16px;

                border: 1px solid ${({theme})=> theme.COLORS.GRAY_300};

                border-radius: 50%;

            }
            svg{
                color: ${({theme})=> theme.COLORS.RED};
            }

            >span{
               font-size: 16px;
               font-weight: 400;
               color: ${({theme})=> theme.COLORS.WHITE};
            }
        }
    }

    .tags{
        display: flex;
        gap: 8px;
        margin-block: 40px;
    }
    
    .sinopse{
        color: ${({theme})=> theme.COLORS.WHITE};
        
        text-align: justify;

        font-size: 16px;
        font-weight: 400;
        p:first-child{
            margin-bottom: 20px;

        }
    }
`;

