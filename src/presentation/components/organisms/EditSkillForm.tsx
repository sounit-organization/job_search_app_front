import { Button, TextField } from "@mui/material";
import { FC } from "react";
import useForm, { FormInitialValues } from "../../hooks/useForm";

type Props = {
  initialFormData: FormInitialValues;
  buttonText: string;
  onSubmitLogic: (title: string) => void;
};

const EditSkillForm: FC<Props> = (props) => {
  const { initialFormData, buttonText, onSubmitLogic } = props;

  const { values, valueChangeHandler, resetValues } = useForm(initialFormData);
  const { title } = values;

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmitLogic(title);

    resetValues();
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField name="title" value={title} onChange={valueChangeHandler} />
      <Button type="submit" variant="outlined">
        {buttonText}
      </Button>
    </form>
  );
};

export default EditSkillForm;
