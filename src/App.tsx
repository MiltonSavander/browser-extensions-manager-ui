import "./global.css";
import { useState, useEffect } from "react";
import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = {
  palette: {
    mode: "light" as "light",
    text: {
      primary: "hsl(227, 75%, 14%)",
      secondary: "hsl(226, 25%, 17%)",
    },
    background: {
      default: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
      paper: "hsl(220, 100%, 99%)",
    },
    primary: {
      main: "hsl(3, 71%, 56%)",
      light: "hsl(3, 86%, 64%)",
      dark: "hsl(3, 77%, 44%)",
      "100": "hsl(200, 60%, 99%)",
      "200": "hsl(195, 2%, 98%)",
      "300": "hsl(226, 11%, 37%)",
      "400": "hsl(217, 61%, 90%)",
      "500": "hsl(0, 0%, 78%)",
      "600": "hsl(240, 6%, 94%)",
    },
  },
};

const darkTheme = {
  palette: {
    mode: "dark" as "dark",
    text: {
      primary: "hsl(200, 60%, 99%)",
      secondary: "hsl(0, 0%, 78%)",
    },
    background: {
      default: "linear-gradient(180deg, #040918 0%, #091540 100%)",
      paper: "hsl(226, 25%, 17%)",
    },
    primary: {
      main: "hsl(3, 71%, 56%)",
      light: "hsl(3, 77%, 44%)",
      dark: "hsl(3, 86%, 64%)",
      "100": "hsl(227, 75%, 14%)",
      "200": "hsl(226, 11%, 37%)",
      "300": "hsl(200, 60%, 99%)",
      "400": "hsl(217, 61%, 90%)",
      "500": "hsl(226, 11%, 37%)",
      "600": "hsl(225, 23%, 24%)",
    },
  },
};

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [filterExtensionsState, setFilterExtensionsState] = useState("all");

  const modeTheme = darkMode ? darkTheme : lightTheme;
  const componentTheme = {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    Width: "calc(100% - 2rem)",
    maxWidth: "1100px",
    components: {
      MuiSwitch: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
        },
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 2,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: modeTheme.palette.primary.dark,
                  opacity: 1,
                },
                "&:hover + .MuiSwitch-track": {
                  backgroundColor: modeTheme.palette.primary.main,
                },
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 22,
              height: 22,
            },
            "& .MuiSwitch-track": {
              borderRadius: 26 / 2,
              backgroundColor: modeTheme.palette.primary[500], // gray when unchecked
              opacity: 1,
              transition: "background-color 100ms ease-in-out",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontFamily: "Noto Sans, sans-serif",

            borderRadius: "9999px",
            textTransform: "none",
            color: modeTheme.palette.text.primary,
            border: `1px solid ${modeTheme.palette.primary[500]}`,
            backgroundColor: modeTheme.palette.background.paper,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: modeTheme.palette.primary.dark,
              color: modeTheme.palette.primary[100],
              border: `1px solid ${modeTheme.palette.primary.dark}`,
            },
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
        },
        styleOverrides: {
          root: {
            backgroundColor: modeTheme.palette.primary[600],
            borderRadius: "0.7rem",
            "&:hover": {
              backgroundColor: modeTheme.palette.primary[500],
            },
          },
        },
      },
    },
  };

  const theme = createTheme(modeTheme, componentTheme);

  useEffect(() => {
    const root = document.documentElement;
    const palette = theme.palette;

    // Dynamically update CSS variables
    root.style.setProperty("--text-primary", palette.text.primary);
    root.style.setProperty("--text-secondary", palette.text.secondary);
    root.style.setProperty("--background-default", palette.background.default);
    root.style.setProperty("--background-paper", palette.background.paper);
    root.style.setProperty("--primary-main", palette.primary.main);
    root.style.setProperty("--primary-light", palette.primary.light);
    root.style.setProperty("--card-border", palette.primary["200"]);

    // Shadow
    root.style.setProperty("--box-shadow", theme.boxShadow);

    // Width
    root.style.setProperty("--app-width", theme.Width);

    // Max Width
    root.style.setProperty("--app-max-width", theme.maxWidth);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setDarkMode={setDarkMode} />
        <Section
          filterExtensionsState={filterExtensionsState}
          setFilterExtensionsState={setFilterExtensionsState}
        />
        <Cards filterExtensionsState={filterExtensionsState} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
