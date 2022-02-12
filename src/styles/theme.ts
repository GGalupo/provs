import { createTheme } from "@mui/material/styles";
import { red, indigo, brown } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: brown,
    error: {
      main: red.A400,
    },
    background: {
      default: "#1b1b1b",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
});
