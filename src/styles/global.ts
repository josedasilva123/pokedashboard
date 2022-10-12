import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #000000;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li{
        list-style: 0;
    }
    img{
        max-width: 100%;
    }
`
export const ColorsTheme = {
    colors: {
        white: "#FFFFFF",
        white20: "rgba(217, 217, 217, 0.15)",
        white50: "rgba(255, 255, 255, .5)",
        red: "#F55859",
        blue: "#0F81EC",
    } 
}


