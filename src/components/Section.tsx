import React from "react";
import Button from "@mui/material/Button";

function Section({ filterExtensionsState, setFilterExtensionsState }) {
  const styles = {
    backgroundColor: "hsl(3, 77%, 44%)",
    color: "hsl(200, 60%, 99%)",
    border: "1px solid hsl(3, 77%, 44%)",
    "&:hover": {
      backgroundColor: "hsl(3, 86%, 64%)",
      color: "hsl(200, 60%, 99%)",
      border: "1px solid hsl(3, 86%, 64%)",
    },
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
            sx={
              filterExtensionsState === value
                ? styles
                : { "&:hover": { color: "hsl(226, 11%, 37%)", border: "1px solid hsl(0, 0%, 78%)", backgroundColor: "#F6FAFD" } }
            }
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
