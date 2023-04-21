import Button from "@mui/material/Button";

interface buttonProps {
  text: string;
  onClick: () => void;
}

const MyButton = ({ text, onClick }: buttonProps) => {
  return (
    <Button
      sx={{ ":hover": { color: "black" } }}
      variant="contained"
      color="warning"
      href="#"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default MyButton;
