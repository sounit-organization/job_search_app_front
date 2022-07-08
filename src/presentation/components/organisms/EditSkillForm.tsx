import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import useForm from "../../hooks/useForm";

type Props = {
  initialFormData: ISkill;
};

const EditSkillForm: FC<Props> = (props) => {
  const { initialFormData } = props;

  const { values, valueChangeHandler } = useForm({ ...initialFormData });
  const { title } = values;

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      {title && <TextField value={title} onChange={valueChangeHandler} />}
      <Button type="submit" variant="outlined">
        Update Skill
      </Button>
    </form>
  );
};

export default EditSkillForm;
