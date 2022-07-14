import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { jobActions } from "../../../services/redux/jobSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import useForm from "../../hooks/useForm";
import { useSearchJobsQuery } from "../../hooks/useJobsQuery";
import CheckBox from "../molecules/CheckBox";
import classes from "./JobSearchForm.module.css";
import LoadingPage from "./LoadingPage";

type Props = {
  initialValues: FormInitialValues;
};

type FormInitialValues = {
  title: string;
  city: string;
};

const JobSearchForm: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { initialValues } = props;
  const { values, valueChangeHandler } = useForm(initialValues);
  const { title, city } = values as FormInitialValues;
  const searchJobsQuery = useSearchJobsQuery({ title, city });

  const searchJobsHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();

    const { data } = await searchJobsQuery.refetch();

    dispatch(jobActions.setJobs(data));
  };

  // FIXME: add logic
  const checkedHandler = (checkedArr: number[]) => {};

  if (searchJobsQuery.isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className={classes["wrapper"]}>
        <div className={classes["JobSearchForm"]}>
          <TextField
            label="Job Title"
            name="title"
            onChange={valueChangeHandler}
            value={title}
            sx={{ mb: 1 }}
            className={classes["JobSearchForm__input"]}
          />
          <TextField
            label="City"
            name="city"
            onChange={valueChangeHandler}
            value={city}
            sx={{ mb: 1 }}
            className={classes["JobSearchForm__input"]}
          />
          <Button
            variant="contained"
            onClick={searchJobsHandler as any}
            className={classes[`JobSearchForm__btn`]}
          >
            Search Jobs
          </Button>
        </div>
      </div>
      {/* FIXME: add logic */}
      <CheckBox onChecked={checkedHandler} />
    </>
  );
};

export default JobSearchForm;
