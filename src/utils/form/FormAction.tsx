import MyButton from "../../components/buttons/MyButton";

interface FormActionProps {
  onSubmit: () => void;
  handleClose: () => void;
}

const FormAction = ({ handleClose, onSubmit }: FormActionProps) => {
  return (
    // Form action buttons("Save" and "Cancel"):
    <>
      <MyButton text="Save" type="submit" onSubmit={onSubmit} />
      <MyButton text="Cancel" onClick={handleClose} />
    </>
  );
};

export default FormAction;
