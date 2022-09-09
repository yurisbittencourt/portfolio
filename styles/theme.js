import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globals";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;

const theme = {
  fonts: {
    main: "'Roboto Mono', monospace",
  },
  colors: {
    primary: "black",
    sky: "#87ceeb",
    projectsBGC: "white",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
  },
  backgrounds: {
    mountains: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2391dada' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2370cece' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%238edbdb' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%236acfcf' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%238bdcdc' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%2363cfcf' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2388dcdc' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%235cd0d0' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%2384dddd' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2355d0d0' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2381dede' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%234cd1d1' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};
