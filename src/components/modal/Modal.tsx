import { useState } from "react";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MyButton from "./../buttons/MyButton";
import FormBody from "./../../utils/form/FormBody";
import FormAction from "../../utils/form/FormAction";

interface FormData {
  task: string;
  date: Date;
}

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, submitCount },
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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

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
          {isSubmitting && <div>Submitting...</div>}
          {submitCount > 0 && isSubmitSuccessful && (
            <div className="text-success">Task added successfully.</div>
          )}
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
