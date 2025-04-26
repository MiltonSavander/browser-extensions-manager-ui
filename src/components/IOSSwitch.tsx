import React, { useState } from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/system";

const IOSSwitch = styled((props) => <Switch {...props} />)(({ theme }) => ({
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
        backgroundColor: "hsl(3, 77%, 44%)", // green when checked
        opacity: 1,
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
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function IOSSwitchComponent({ checked, onChange }) {
  return (
    <div>
      <IOSSwitch checked={checked} onChange={onChange} />
    </div>
  );
}

export default IOSSwitchComponent;
