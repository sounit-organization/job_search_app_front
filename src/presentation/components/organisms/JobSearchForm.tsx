import { FC, useState } from "react";
import { IJob } from "../../../domain/Job";
import useForm from "../../hooks/useForm";
import Input from "../atoms/Input";
import CheckBox from "../molecules/CheckBox";
import classes from "./JobSearchForm.module.css";

type Props = {
  initialValues: FormInitialValues;
};

type FormInitialValues = {
  title: string;
  city: string;
};

const JobSearchForm: FC<Props> = (props) => {
  const { initialValues } = props;
  const { values, valueChangeHandler } = useForm(initialValues);
  const { title, city } = values as FormInitialValues;

  // FIXME: delete?
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>([]);

  // FIXME: make http request to backend to find job
  const filterJobsHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();

    setFilteredJobs(filteredJobs);
  };

  // FIXME: add logic
  const checkedHandler = (checkedArr: number[]) => {};

  return (
    <>
      <div className={classes["wrapper"]}>
        <div className={classes["JobSearchForm"]}>
          <Input
            name="title"
            placeholder="Job title"
            onChange={valueChangeHandler}
            value={title}
            inputClassName={classes[`JobSearchForm__input__input`]}
            wrapperClassName={classes["JobSearchForm__input"]}
          />
          <Input
            name="city"
            placeholder="Vancouver, BC"
            onChange={valueChangeHandler}
            value={city}
            inputClassName={classes[`JobSearchForm__input__input`]}
            wrapperClassName={classes["JobSearchForm__input"]}
          />
          <button
            onClick={filterJobsHandler as any}
            className={classes[`JobSearchForm__btn`]}
          >
            Find Jobs
          </button>
        </div>
      </div>
      {/* FIXME: add logic */}
      <CheckBox onChecked={checkedHandler} />
    </>
  );
};

export default JobSearchForm;
