import Button from "@mui/material/Button";
import { iButton } from "../../../types/button_interface";

// Default button type is "button" if not mentioned
export const MyButton = ({ text, type = "button", ...rest }: iButton): JSX.Element => {
  return (
    <Button
      sx={{ ":hover": { color: "black" } }}
      variant="contained"
      color="warning"
      href="#"
      type={type}
      {...rest}
    >
      {text}
    </Button>
  );
};