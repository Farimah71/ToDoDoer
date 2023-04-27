import { UseFormRegister, useFormState } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

interface FormBodyProps<T extends FieldValues> {
  task: string;
  date: Date;
  handleTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<T>;
  errors: ReturnType<typeof useFormState>["errors"];
}

const FormBody = <T extends FieldValues>({
  task,
  date,
  handleTaskChange,
  handleDateChange,
  register,
  errors,
}: FormBodyProps<T>) => {
  return (
    <div className="row">
      <div className="col-7">
        {/* "Task" field with label and error message */}
        <label htmlFor="task">Task</label>
        <input
          value={task}
          {...register("task", { required: true })}
          onChange={handleTaskChange}
          className="form-control"
          placeholder="Call mom/Pay phone bill..."
        />
        {errors.task && <p className="text-danger">Task is required.</p>}
      </div>

      <div className="col-5">
        {/* "Date" field with label and error message */}
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={date.toISOString().slice(0, 10)}
          {...register("date", { required: true })}
          onChange={handleDateChange}
          className="form-control"
        />
        {errors.date && <p className="text-danger">Please pick a date.</p>}
      </div>
    </div>
  );
};

export default FormBody;
