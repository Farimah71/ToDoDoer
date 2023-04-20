import Button from "@mui/material/Button";

interface buttonProps {
  text: string;
}

const MyButton = (props: buttonProps) => {
  return (
    <Button
      sx={{ ":hover": { color: "black" } }}
      variant="contained"
      color="warning"
      href="#"
    >
      {props.text}
    </Button>
  );
};

export default MyButton;
