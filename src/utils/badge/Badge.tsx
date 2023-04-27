import Stack from "@mui/material/Stack/Stack";
import Chip from "@mui/material/Chip/Chip";

interface propType {
  label: string;
}

// Renders a badge with a certain label sent as prop
const Badge = ({label}: propType) => {
  return (
    <Stack direction="row">
      <Chip
        label={label}
        color="warning"
        size="small"
        variant="outlined"
      />
    </Stack>
  );
};

export default Badge;
