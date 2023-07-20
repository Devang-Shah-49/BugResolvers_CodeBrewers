import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,

    *::after,

    *::before {
    box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        padding: 0;
        margin: 0;
        font-family: ${({ theme }) => theme.fontFamily};
        transition: all 0.25s linear;
        text-shadow: ${({ theme }) => theme.textShadow};
    }

`;
