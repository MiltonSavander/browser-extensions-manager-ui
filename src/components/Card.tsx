import React, { useState } from "react";
import IOSSwitchComponent from "./IOSSwitch";
import Button from "@mui/material/Button";
import "../global.css";

function Card({ logo, name, description, isActive }) {
  const [isChecked, setIsChecked] = useState(isActive); // Control the switch state

  // Handle toggle state change
  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
        <IOSSwitchComponent checked={isChecked} onChange={handleSwitchChange} />
      </div>
    </div>
  );
}

export default Card;
