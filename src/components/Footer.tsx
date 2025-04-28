import { useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();

  return (
    <div className="attribution">
      <div>
        <span
          style={{
            color: theme.palette.mode === "dark" ? "hsl(216, 100%, 99%)" : "hsl(226, 11%, 37%)",
          }}
        >
          Challenge by{" "}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.mode === "dark" ? "#66B2FF" : "#1A0DAB",
            textDecoration: "underline",
          }}
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
      </div>
      <div>
        <span
          style={{
            color: theme.palette.mode === "dark" ? "hsl(216, 100%, 99%)" : "hsl(226, 11%, 37%)",
          }}
        >
          Coded by{" "}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.mode === "dark" ? "#66B2FF" : "#1A0DAB",
            textDecoration: "underline",
          }}
          href="https://my-react-portfolio-snowy.vercel.app/"
        >
          Milton Savander
        </a>
      </div>
    </div>
  );
}

export default Footer;
