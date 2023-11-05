import Stack from "@mui/material/Stack/Stack";
import Chip from "@mui/material/Chip/Chip";
import { iBadge } from "../../types/badge_interface";

// Renders a badge with a certain label sent as prop
export const Badge = ({ label }: iBadge): JSX.Element => {
  return (
    <Stack direction="row">
      <Chip label={label} color="warning" size="small" variant="outlined" />
    </Stack>
  );
};
