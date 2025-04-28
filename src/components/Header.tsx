import { IconButton, useTheme } from "@mui/material";
import React from "react";

function header({ setDarkMode }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => {
      console.log(!prevMode);
      return !prevMode; // Toggle the dark mode
    });
  };
  return (
    <header className="extensionsHeader">
      <img
        src={
          isDarkMode
            ? "../public/assets/images/dark-logo.svg"
            : "../public/assets/images/light-logo.svg"
        }
        alt="logo"
      />
      <IconButton size="large" onClick={handleDarkModeToggle}>
        <img
          src={
            isDarkMode
              ? "../public/assets/images/icon-sun.svg"
              : "../public/assets/images/icon-moon.svg"
          }
          alt="moon"
        />
      </IconButton>
    </header>
  );
}

export default header;
