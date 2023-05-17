import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Task } from "./../../features/todos/todoSlice";
import { FormData } from "./AddModal";
import { useAppDispatch } from "../../app/hooks";
import { editTask } from "../../features/todos/todoSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormBody from "../../utils/form/FormBody";
import FormAction from "../../utils/form/FormAction";
import EditNoteIcon from "@mui/icons-material/EditNote";

interface EditModalProps {
  dataToEdit: Task;
}

const EditModal = ({ dataToEdit }: EditModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //Initial form load with selected task current data(title and date):
  const [task, setTask] = useState(dataToEdit.title);
  const [date, setDate] = useState(dataToEdit.date);
  const id = dataToEdit.id;
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onSubmit = (data: FormData) => {
    dispatch(editTask(data));
    handleClose();
  };

  return (
    <div>
      <EditNoteIcon
        color="warning"
        className="icon-control clickable"
        onClick={handleClick}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>

        {/* Modal content */}
        <DialogContent>
          <FormBody
            id={id}
            task={task}
            date={date}
            handleTaskChange={handleTaskChange}
            handleDateChange={handleDateChange}
            register={register}
            errors={errors}
          />
        </DialogContent>

        {/* Modal action buttons */}
        <DialogActions>
          <FormAction
            handleClose={handleClose}
            onSubmit={handleSubmit(onSubmit)}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditModal;
