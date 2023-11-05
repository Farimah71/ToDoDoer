import { iFormAction } from "../../../types/form_action_interface";
import { MyButton } from "../button";

export const FormAction = ({ handleClose, onSubmit }: iFormAction): JSX.Element => {
  return (
    // Form action buttons("Save" and "Cancel"):
    <>
      <MyButton text="Save" type="submit" onClick={onSubmit} />
      <MyButton text="Cancel" onClick={handleClose} />
    </>
  );
};