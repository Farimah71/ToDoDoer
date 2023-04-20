import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import "./controlButtons.scss";

const ControlButtons = () => {
  return (
    <span className="item-control">
      <EditNoteIcon color="warning" className="icon-control clickable" />
      <DeleteIcon color="error" className="icon-control clickable" />
    </span>
  );
};

export default ControlButtons;
