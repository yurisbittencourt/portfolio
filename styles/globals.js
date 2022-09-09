import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    font-size: 1rem;
    font-size:
      clamp(1rem, 0.8181818181818181rem + 0.9090909090909091vw, 1.5rem);
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;
