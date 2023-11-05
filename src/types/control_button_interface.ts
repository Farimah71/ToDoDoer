import { Task } from "../redux/todoSlice";

export interface iControlButton {
  fetchedDataToEdit: Task;
  onDelete: () => void;
}
