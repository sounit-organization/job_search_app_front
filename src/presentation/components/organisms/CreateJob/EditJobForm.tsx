import axios from "axios";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { createJobUrl, fetchSkillsUrl } from "../../../../constants/constants";
import { ISkill } from "../../../../domain/Skill";
import CreateButton from "../../atoms/CreateButton";
import classes from "./EditJobForm.module.css";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { TextField, Button } from "@mui/material";
import useForm, { FormInitialValues } from "../../../hooks/useForm";
// import { current } from "@reduxjs/toolkit";

type Props = {
  initialFormData: FormInitialValues;
  buttonText: string;
  onSubmitLogic: (
    title: string,
    companyName: string,
    payment: string,
    city: string,
    description: string,
    skills: string[]
  ) => void;
};

const EditJobForm: FC<Props> = (props) => {
  const { initialFormData, buttonText, onSubmitLogic } = props;
  const { values, valueChangeHandler, resetValues } = useForm(initialFormData);

  const { title, company, payment, city, description } = values;

  const [skillList, setSkillList] = useState<ISkill[]>([]);
  // const [checkedSkillList, setCheckedSkillList] = useState<ISkill[]>([]);
  const { token } = useAppSelector((state) => state.auth);

  // FIXME: add checked skills to the skill list.
  const checkedChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // setCheckedSkillList((current: any) => [...current, e.target.value]);
    // setCheckedSkillList(e.target.value);
  };

  const skillListIds: string[] = [];
  skillList.forEach((skill) => {
    skillListIds.push(skill._id!);
  });

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitLogic(title, company, payment, city, description, skillListIds);

    resetValues();
  };

  useEffect(() => {
    const fetchSkillList = async () => {
      try {
        const response = await axios(fetchSkillsUrl);

        const responseData = response.data;
        console.log(responseData.skills);

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
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          sx={{ mb: 1 }}
          value={title}
          onChange={valueChangeHandler}
        />
        <TextField
          name="company"
          label="Company"
          variant="outlined"
          sx={{ mb: 1 }}
          value={company}
          onChange={valueChangeHandler}
        />

        <TextField
          name="city"
          label="City"
          variant="outlined"
          sx={{ mb: 1 }}
          value={city}
          onChange={valueChangeHandler}
        />
        <TextField
          name="payment"
          label="Payment"
          variant="outlined"
          sx={{ mb: 1 }}
          value={payment}
          onChange={valueChangeHandler}
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          sx={{ mb: 1 }}
          value={description}
          onChange={valueChangeHandler}
        />
      </div>

      {skillList?.map((skill) => (
        <div key={skill._id}>
          <input
            type={"checkbox"}
            value={skill.title}
            onChange={checkedChangeHandler}
          />
          <label>{skill.title}</label>
        </div>
      ))}
      <Button type="submit" variant="outlined">
        {buttonText}
      </Button>

      <CreateButton
        title="Add New Job"
        className={classes[`${componentName}__button`]}
      />
    </form>
  );
};

const componentName = "JobForm";

export default EditJobForm;
function initialFormData(initialFormData: any): {
  values: any;
  valueChangeHandler: any;
} {
  throw new Error("Function not implemented.");
}
