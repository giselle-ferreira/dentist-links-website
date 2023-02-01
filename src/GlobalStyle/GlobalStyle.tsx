import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;        
    }

    html {
        background-size: cover;
        height: 100vh;
    }

    body {     
        height: 100vh;
        background: linear-gradient(360deg, #000000 0%, #414042 53.13%) center center;
        color: #fff;
        background-size: cover;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;