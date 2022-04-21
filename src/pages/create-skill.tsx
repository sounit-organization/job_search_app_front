import axios from "axios";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import CreateButton from "../components/atoms/create-button";
import Input from "../components/atoms/input";
import classes from "./create-skill.module.css";

export const createSkillUrl = `${process.env.REACT_APP_BACKEND_URL}/skills`;

const CreateSkill: FC = () => {
  const [skillTitle, setSkillTitle] = useState<string>("");

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post(
        createSkillUrl,
        JSON.stringify({
          skill: skillTitle,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const skillNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSkillTitle(event.target.value);
  };

  return (
    <div className={classes[componentName]}>
      <h1>Create Skill</h1>

      <form onSubmit={formSubmitHandler}>
        <Input
          placeholder="skillname"
          className={classes[`${componentName}__input`]}
          value={skillTitle}
          onChange={skillNameChangeHandler}
        />

        <CreateButton
          title="Add Skill"
          className={classes[`${componentName}__btn`]}
        />
      </form>
    </div>
  );
};

const componentName = "CreateSkill";

export default CreateSkill;
