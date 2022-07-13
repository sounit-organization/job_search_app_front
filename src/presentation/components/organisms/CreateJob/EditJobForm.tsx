import axios from "axios";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { createJobUrl, fetchSkillsUrl } from "../../../../constants/constants";
import { ISkill } from "../../../../domain/Skill";
import CreateButton from "../../atoms/CreateButton";
import Input from "../../atoms/Input";
import classes from "./EditJobForm.module.css";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { TextField, Button } from "@mui/material";
import useForm, { FormInitialValues } from "../../../hooks/useForm";
import { current } from "@reduxjs/toolkit";

// interface IProps {
//   className: string;
// }

type Props = {
  // initialFormData: FormInitialValues;
  buttonText: string;
  // onSubmitLogic: (title: string) => void;
};

const JobForm: FC<Props> = (props) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobCity, setJobCity] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [jobPayment, setJobPayment] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [skillList, setSkillList] = useState<ISkill[]>([]);
  const [checkedSkillList, setCheckedSkillList] = useState<ISkill[]>([]);
  const { token } = useAppSelector((state) => state.auth);

  const { buttonText } = props;

  // const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   // onSubmitLogic({
  //   //   jobTitle,
  //   //   jobCompany,
  //   //   jobCity,
  //   //   jobPayment,
  //   //   jobDesc,
  //   //   skillList,
  //   // });

  //   resetValues();
  // };

  const checkedChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedSkillList((current: any) => [...current, e.target.value]);
    // setCheckedSkillList(e.target.value);
  };

  console.log(skillList);

  const skillListIds: (string | undefined)[] = [];
  skillList.forEach((skill) => {
    skillListIds.push(skill._id);
  });

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!jobTitle) {
      return;
    }

    await axios.post(
      createJobUrl,
      {
        title: jobTitle,
        companyName: jobCompany,
        city: jobCity,
        payment: jobPayment,
        description: jobDesc,
        skills: skillListIds,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setJobTitle("");
  };

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJobTitle(event.target.value);
  };
  const cityChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJobCity(event.target.value);
  };
  const companyChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJobCompany(event.target.value);
  };
  const paymentChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJobPayment(event.target.value);
  };
  const descChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJobDesc(event.target.value);
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
        {/* <label className={classes[`${componentName}__label`]} htmlFor="title">
          Job Title
        </label>
        <Input
          id="title"
          placeholder="title"
          value={jobTitle}
          onChange={titleChangeHandler}
        /> */}
        <TextField
          name="title"
          value={jobTitle}
          onChange={titleChangeHandler}
        />
        <TextField
          name="company"
          value={jobCompany}
          onChange={companyChangeHandler}
        />

        <TextField name="city" value={jobCity} onChange={cityChangeHandler} />
        <TextField
          name="payment"
          value={jobPayment}
          onChange={paymentChangeHandler}
        />
        <TextField name="desc" value={jobDesc} onChange={descChangeHandler} />
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

export default JobForm;
