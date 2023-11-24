import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik, sans-serif",
    h1: {
      fontSize: "4.5rem" /* 72px */,
      fontWeight: 700,
    },
    h2: {
      fontSize: "3.375rem" /* 54px */,
      fontWeight: 400,
    },
    h3: {
      fontSize: "3rem" /* 48px */,
      fontWeight: 700,
    },
    h4: {
      fontSize: "2.5rem" /* 40px */,
      fontWeight: 400,
    },
    h5: {
      fontSize: "2.25rem" /* 36px */,
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.5rem" /* 24px */,
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem" /* 16px */,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem" /* 14px */,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.25rem" /* 20px */,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.75rem" /* 12px */,
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem" /* 16px */,
      fontWeight: 400,
    },
  },
  palette: {
    textColor: {
      lightDarkGrey: "#3A414D",
      darkGray: "#303641",
      lightGray: "#5E646F",
      extraLightGray: "#818790",
      white: "#fff",
      blue: "#10C9DE",
    },
    bgColor: {
      white: "#fff",
      white05: "rgba(255, 255, 255, 0.05)",
      white5: "rgba(255, 255, 255, 0.5)",
      black05: "rgba(0, 0, 0, 0.5)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
