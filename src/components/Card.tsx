import React, { useState } from "react";
import IOSSwitchComponent from "./IOSSwitch";
import Button from "@mui/material/Button";
import "../global.css";

function Card({ logo, name, description, isActive, onSwitchChange }) {
  return (
    <div className="cardContainer">
      <div className="cardUpperContainer">
        <img src={logo} alt={name} />
        <div className="cardInnerContaier">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="cardLowerContainer">
        <Button className="roundedButton" variant="outlined" size="small">
          Remove
        </Button>
        <IOSSwitchComponent checked={isActive} onChange={onSwitchChange} />
      </div>
    </div>
  );
}

export default Card;
