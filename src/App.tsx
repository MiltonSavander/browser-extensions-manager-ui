import "./global.css";
import Cards from "./components/Cards";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Section from "./components/Section";

const theme = createTheme({
  components: {
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
          backgroundColor: "hsl(200, 60%, 99%)",
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
          borderRadius: "1rem",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Section />
        <Cards />
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
