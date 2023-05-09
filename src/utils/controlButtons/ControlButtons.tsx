import EditModal from "../../components/modal/EditModal";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import { Task } from './../../features/todos/todoSlice';
import "./controlButtons.scss";

interface ControlButtonsProps {
  fetchedDataToEdit: Task;
  onDelete: () => void;
}

const ControlButtons = ({
  fetchedDataToEdit,
  onDelete,
}: ControlButtonsProps) => {
  return (
    // List control icons("Edit" and "Delete"):
    <span className="item-control d-flex">
      <EditModal dataToEdit={fetchedDataToEdit} />
      <DeleteIcon
        color="error"
        className="icon-control clickable"
        onClick={onDelete}
      />
    </span>
  );
};

export default ControlButtons;
