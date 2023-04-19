import Button from "@mui/material/Button";

interface buttonProps {
  text: string;
}

const MyButton = (props: buttonProps) => {
  return (
    <Button variant="contained" color="warning" href="#contained-buttons">
      {props.text}
    </Button>
  );
};

export default MyButton;
