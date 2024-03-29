import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;        
    }

    body {     
        height: 100%;
        background: linear-gradient(360deg, #000000 0%, #414042 53.13%) no-repeat;
        color: #fff;
        background-size: cover;
    }

    @media (min-width: 450px) {
        body {     
            height: 100vh;
        }
      }

    a {
        text-decoration: none;
        color: inherit;
    }
`;