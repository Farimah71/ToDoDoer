import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import "./controlButtons.scss";

interface ControlButtonsProps {
  onDelete: () => void;
}

const ControlButtons = ({ onDelete }: ControlButtonsProps) => {
  return (
    // List control icons("Edit" and "Delete"):
    <span className="item-control">
      <EditNoteIcon color="warning" className="icon-control clickable" />
      <DeleteIcon
        color="error"
        className="icon-control clickable"
        onClick={onDelete}
      />
    </span>
  );
};

export default ControlButtons;
