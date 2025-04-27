import "./global.css";
import Cards from "./components/Cards";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Section from "./components/Section";
import { useState } from "react";
import React from "react";
import extensionsData from "../data.json";

const theme = createTheme({
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
                backgroundColor: "hsl(3, 77%, 44%)",
                opacity: 1,
              },
              "&:hover + .MuiSwitch-track": {
                backgroundColor: "hsl(3, 86%, 64%)",
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
            backgroundColor: "hsl(0, 0%, 78%)", // gray when unchecked
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
          borderRadius: "9999px",
          textTransform: "none",
          color: "hsl(227, 75%, 14%)",
          border: "1px solid hsl(0, 0%, 78%)",
          backgroundColor: "#FCFEFD",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "hsl(3, 71%, 56%)",
            color: "hsl(200, 60%, 99%)",
            border: "1px solid hsl(3, 71%, 56%)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#EEEEEF",
          borderRadius: "0.7rem",
          "&:hover": {
            backgroundColor: "#C6C6C6",
          },
        },
      },
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [filterExtensionsState, setFilterExtensionsState] = useState("all");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Section filterExtensionsState={filterExtensionsState} setFilterExtensionsState={setFilterExtensionsState} />
        <Cards filterExtensionsState={filterExtensionsState} />
        <div className="attribution">
          <div>
            <span style={{ color: "hsl(226, 11%, 37%)" }}>Challenge by </span>
            <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>
          </div>
          <div>
            <span style={{ color: "hsl(226, 11%, 37%)" }}>Coded by </span>
            <a href="#">Milton Savander</a>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
