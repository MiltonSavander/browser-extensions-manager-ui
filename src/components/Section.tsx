import React from "react";
import Button from "@mui/material/Button";

function Section({ filterExtensionsState, setFilterExtensionsState }) {
  const styles = {
    backgroundColor: "hsl(3, 71%, 56%)",
    color: "hsl(200, 60%, 99%)",
    border: "1px solid hsl(3, 71%, 56%)",
  };

  const buttons = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <section className="showExtensionsSelector">
      <div className="appName">Extensions List</div>
      <div className="showExtensionsSelectorButtons">
        {buttons.map(({ label, value }) => (
          <Button
            key={value}
            className="roundedButton"
            variant="outlined"
            size="large"
            sx={filterExtensionsState === value ? styles : {}}
            onClick={() => setFilterExtensionsState(value)}
          >
            {label}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Section;
