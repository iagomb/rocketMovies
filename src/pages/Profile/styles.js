import styled from "styled-components";



export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    flex-direction: column;

    header{
        padding: 64px 144px;
        background-color: rgba(255, 133, 155, 0.05);

        a{
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

export const Form = styled.form`
    width: 21.25rem;
    
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    
    /* padding: 0 134px; */

    div{
        width: 100%;
        max-width: 340px;
    }

    button{
        margin-top: 16px;
        padding: 14px 140px;
    }

    a{
        margin-top: 42px;
    }
`;

export const Avatar = styled.div`
    height: 186px;
    width: 186px;
    position: relative;
    border-radius: 50%;

    margin: -93px auto 64px;
    > img{
        height: 186px;
        width: 186px;
        
        border-radius: 50%;
    }

    > label{
        background-color: ${({theme})=> theme.COLORS.RED};
        padding: 14px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;

        // sumir com o elemento adequadamente
        input{
            display: none;
        }
    }
`;