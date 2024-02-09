"use client";

import { createTheme } from "@mui/material/styles";

import { Raleway } from "next/font/google";
import { Cinzel } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontSize: 16,
    body1: {
      fontFamily: raleway.style.fontFamily,
    },
    h1: {
      fontFamily: cinzel.style.fontFamily,
      fontSize: "2em",
    },
    h2: {
      fontFamily: cinzel.style.fontFamily,
      // fontFamily: raleway.style.fontFamily,
      fontSize: "1.5em",
    }
  },
});

export { theme };
