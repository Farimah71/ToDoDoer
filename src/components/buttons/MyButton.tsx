import Button from "@mui/material/Button";

interface buttonProps {
  text: string;
  type?: string;
  onClick?: () => void;
}

// Default button type is "button" if not mentioned
const MyButton = ({ text, type = "button", ...rest }: buttonProps) => {
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

export default MyButton;
