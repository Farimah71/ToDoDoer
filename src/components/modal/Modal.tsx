import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MyButton from "./../buttons/MyButton";
import FormBody from "./../../utils/form/FormBody";
import FormAction from "../../utils/form/FormAction";

export interface FormData {
  task: string;
  date: string;
}

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
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
    setDate(event.target.value);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  // Resets form after adding new task
  useEffect(() => {
    reset({
      task: "",
      date: "",
    });
    handleClose();
  }, [isSubmitSuccessful]);

  return (
    <div>
      <MyButton text="Add new task" onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>

        {/* Modal content */}
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

export default Modal;
