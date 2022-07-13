import { FC } from "react";
import { searchJobs } from "../../../services/jobHttpClient.adapter";
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

  const searchJobsHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();

    const response = await searchJobs({ searchTerms: { title, city } });
    console.log(response);
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
            onClick={searchJobsHandler as any}
            className={classes[`JobSearchForm__btn`]}
          >
            Search Jobs
          </button>
        </div>
      </div>
      {/* FIXME: add logic */}
      <CheckBox onChecked={checkedHandler} />
    </>
  );
};

export default JobSearchForm;
