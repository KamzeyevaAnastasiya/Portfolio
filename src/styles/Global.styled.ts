import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.2;
    }

    body {
        margin: 0;
        font-family: 'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section:nth-of-type(odd) {
        background-color: ${Theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${Theme.colors.secondaryBg};
    }

    h5 {
        font-family: "Epilogue", sans-serif;
        font-size: 16px;
        line-height: 1.5;
    }
`