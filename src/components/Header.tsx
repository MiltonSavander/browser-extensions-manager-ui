import { IconButton } from "@mui/material";
import React from "react";

function header() {
  return (
    <header className="extensionsHeader">
      <img src="../public/assets/images/logo.svg" alt="logo" />
      <IconButton size="large">
        <img src="../public/assets/images/icon-moon.svg" alt="moon" />
      </IconButton>
    </header>
  );
}

export default header;
