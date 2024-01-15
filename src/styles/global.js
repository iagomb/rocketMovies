import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
        -webkit-font-smoothing: antialiased;

        font-size: 16px;
    }

    button{
        background-color: ${({theme})=> theme.COLORS.RED};
        color: ${({theme})=> theme.COLORS.TEXTBUTTON};

        transition: filter .3s;
    }

    button:hover{
        filter: brightness(.9);
    }
`; 