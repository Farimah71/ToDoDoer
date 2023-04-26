import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MyButton from "./../buttons/MyButton";
import FormBody from "./../../utils/form/FormBody";
import { useForm } from "react-hook-form";

interface FormData {
  task: string;
  date: Date;
}

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  return (
    <div>
      <MyButton text="Add new task" onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <FormBody
            task={task}
            date={date}
            handleTaskChange={handleTaskChange}
            handleDateChange={handleDateChange}
            register={register}
            errors={errors}
          />
        </DialogContent>

        <DialogActions>
          {/* <formAction /> */}
          <MyButton text="Cancel" onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
