import { Button, TextField } from "@mui/material";
import { FC } from "react";
import useForm, { FormInitialValues } from "../../hooks/useForm";

type Props = {
  initialFormData: FormInitialValues;
  buttonText: string;
  onSubmitLogic: (title: string) => void;
  className?: string;
};

const EditSkillForm: FC<Props> = (props) => {
  const { initialFormData, buttonText, onSubmitLogic, className } = props;

  const { values, valueChangeHandler, resetValues } = useForm(initialFormData);
  const { title } = values;

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmitLogic(title);

    resetValues();
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`flex flex-col mb-4 ${className}`}
    >
      <TextField
        label="Skill Title"
        name="title"
        value={title}
        onChange={valueChangeHandler}
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="outlined">
        {buttonText}
      </Button>
    </form>
  );
};

export default EditSkillForm;
