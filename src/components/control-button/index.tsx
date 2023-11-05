import { EditModal } from "../modal/EditModal";
import { iControlButton } from "../../types/control_button_interface";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import "./index.scss";

export const ControlButton = ({
  fetchedDataToEdit,
  onDelete,
}: iControlButton): JSX.Element => {
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
