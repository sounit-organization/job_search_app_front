import axios from "axios";
import { FC, FormEvent } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import { createSkill } from "../../services/skillHttpClient.adapter";
import CreateButton from "../components/atoms/create-button";
import Input from "../components/atoms/input";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useForm from "../hooks/useForm";
import useGetSkills from "../hooks/useGetSkills";
import classes from "./create-skill.module.css";

const formInitialValues = {
  title: "",
};

const CreateSkill: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const { data: skills, isLoading, isError, error } = useGetSkills();

  const { values, valueChangeHandler } = useForm(formInitialValues);
  const { title } = values;

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!token) {
        throw new Error("No token found");
      }

      createSkill({ title }, token);
    } catch (error) {
      console.log(error);
      dispatch(
        errorActions.setError(
          `Failed to create skill: ${(error as Error).message}`
        )
      );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log("isError");

    console.log(error as Error);
    dispatch(errorActions.setError((error as Error).message));
    return <div></div>;
  }

  return (
    <div className={classes[componentName]}>
      <form onSubmit={formSubmitHandler}>
        {/* FIXME: replace with mui-v5 component */}
        <Input
          name="title"
          placeholder="Title"
          className={classes[`${componentName}__input`]}
          value={title}
          onChange={valueChangeHandler}
        />
        <CreateButton
          title="Add Skill"
          className={classes[`${componentName}__btn`]}
        />
      </form>
      {skills?.map((skill) => (
        <div key={skill._id}>{skill.title}</div>
      ))}
    </div>
  );
};

const componentName = "CreateSkill";

export default CreateSkill;
