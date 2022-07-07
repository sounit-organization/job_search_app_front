import axios from "axios";
import { FC, FormEvent } from "react";
import CreateButton from "../components/atoms/create-button";
import Input from "../components/atoms/input";
import useForm from "../hooks/useForm";
import useGetSkills from "../hooks/useGetSkills";
import classes from "./create-skill.module.css";

export const createSkillUrl = `${process.env.REACT_APP_BACKEND_URL}/skills`;

const formInitialValues = {
  title: "",
};

const CreateSkill: FC = () => {
  const { values, valueChangeHandler } = useForm(formInitialValues);
  const { title } = values;
  const { data: skills, isLoading, isError, error } = useGetSkills();

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post(createSkillUrl, {
        title,
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>Fetch Skills Error!</div>;
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
