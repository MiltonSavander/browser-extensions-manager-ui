import React from "react";
import Button from "@mui/material/Button";

function Section() {
  return (
    <section className="showExtensionsSelector">
      <h1>Extensions List</h1>
      <div className="showExtensionsSelectorButtons">
        <Button className="roundedButton" variant="outlined">
          All
        </Button>
        <Button className="roundedButton" variant="outlined">
          Active
        </Button>
        <Button className="roundedButton" variant="outlined">
          Inactive
        </Button>
      </div>
    </section>
  );
}

export default Section;
