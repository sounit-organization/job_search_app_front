import { FormEvent } from "react";
import { errorActions } from "../../../services/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import useForm from "../../hooks/useForm";
import { useSkillMutations } from "../../hooks/useSkillMutations";
import CreateButton from "../atoms/create-button";
import Input from "../atoms/input";

const formInitialValues = {
  title: "",
};

const CreateSkillForm = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const { createSkillMutation } = useSkillMutations();

  const { values, valueChangeHandler, resetValues } =
    useForm(formInitialValues);
  const { title } = values;

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }

    createSkillMutation.mutate({ newSkill: { title }, token });

    resetValues();
  };

  if (createSkillMutation.isError) {
    console.log("skillError", createSkillMutation.error);

    dispatch(
      errorActions.setError(
        `Failed to create skill: ${createSkillMutation.error as Error}`
      )
    );

    createSkillMutation.reset();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* FIXME: replace with mui-v5 component */}
      <Input
        name="title"
        placeholder="Title"
        className=""
        value={title}
        onChange={valueChangeHandler}
      />
      <CreateButton title="Add Skill" className="" />
    </form>
  );
};

export default CreateSkillForm;
