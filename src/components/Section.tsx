import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles"; // Import the useTheme hook

interface SectionProps {
  filterExtensionsState: string;
  setFilterExtensionsState: (value: string) => void;
}

function Section({ filterExtensionsState, setFilterExtensionsState }: SectionProps) {
  const theme = useTheme(); // Use the theme hook to access the theme object
  const activeStyles = {
    backgroundColor: theme.palette.primary.dark, // Use theme value
    color: theme.palette.neutral[100], // Use theme value
    border: `1px solid ${theme.palette.primary.dark}`, // Use theme value
    "&:hover": {
      backgroundColor: theme.palette.primary.main, // Use theme value
      color: theme.palette.neutral[100], // Use theme value
      border: `1px solid ${theme.palette.primary.main}`, // Use theme value
    },
  };

  const inactiveStyles = {
    "&:hover": {
      color: theme.palette.neutral[300], // Use theme value
      border: `1px solid ${theme.palette.neutral[400]}`, // Use theme value
      backgroundColor: theme.palette.neutral[200], // Use theme value
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
            sx={filterExtensionsState === value ? activeStyles : inactiveStyles}
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
