import axios from "axios";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { createJobUrl, fetchSkillsUrl } from "../../../../constants/constants";
import { ISkill } from "../../../../domain/Skill";
import CreateButton from "../../atoms/CreateButton";
import Input from "../../atoms/Input";
import classes from "./JobForm.module.css";

interface IProps {
  className: string;
}

const JobForm: FC<IProps> = (props) => {
  const [jobTitle, setJobTitle] = useState("");
  const [skillList, setSkillList] = useState<ISkill[]>([]);

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!jobTitle) {
      return;
    }

    await axios.post(createJobUrl, {
      title: jobTitle,
    });

    setJobTitle("");
  };

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJobTitle(event.target.value);
  };

  useEffect(() => {
    const fetchSkillList = async () => {
      try {
        const response = await axios(fetchSkillsUrl);

        const responseData = response.data;

        setSkillList(responseData.skills);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSkillList();
  }, []);

  return (
    <form className={classes[componentName]} onSubmit={formSubmitHandler}>
      <div className={classes[`${componentName}__control`]}>
        <label className={classes[`${componentName}__label`]} htmlFor="title">
          Job Title
        </label>
        <Input
          id="title"
          placeholder="title"
          value={jobTitle}
          onChange={titleChangeHandler}
        />
      </div>

      {skillList.map((skill) => (
        <div key={skill._id}>
          <input type={"checkbox"} value={skill.title} />
          <label>{skill.title}</label>
        </div>
      ))}

      <CreateButton
        title="Add New Job"
        className={classes[`${componentName}__button`]}
      />
    </form>
  );
};

const componentName = "JobForm";

export default JobForm;
