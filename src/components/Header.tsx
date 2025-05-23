import { IconButton, useTheme } from "@mui/material";

function header({ setDarkMode }: { setDarkMode: (prevMode: boolean) => void }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode); // Toggle the dark mode
    console.log(!isDarkMode);
  };
  return (
    <header className="extensionsHeader">
      <img
        src={isDarkMode ? "/assets/images/dark-logo.svg" : "/assets/images/light-logo.svg"}
        alt="logo"
      />
      <IconButton size="large" onClick={handleDarkModeToggle}>
        <img
          src={isDarkMode ? "/assets/images/icon-sun.svg" : "/assets/images/icon-moon.svg"}
          alt="moon"
        />
      </IconButton>
    </header>
  );
}

export default header;
