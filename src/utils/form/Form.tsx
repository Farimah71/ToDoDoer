import { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";

interface FormValues {
  task: string;
  date: Date;
}

const Form = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, submitCount },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setTask("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-7">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            value={task}
            {...register("task", { required: true })}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            placeholder="Call mom/Pay phone bill..."
            autoFocus
          />
          {errors.task && <p className="errorMessage">Task is required.</p>}
        </div>

        <div className="col-5">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            {...register("date", { required: true })}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
          {errors.date && <p className="errorMessage">Please pick a date.</p>}
        </div>
      </div>
      <input type="submit" />
      {isSubmitting && <div>Submitting...</div>}
      {submitCount > 0 && isSubmitSuccessful && (
        <div className="text-success">Task added successfully.</div>
      )}
    </form>
  );
};

export default Form;
