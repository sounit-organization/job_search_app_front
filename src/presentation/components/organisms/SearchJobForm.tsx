import { Button, TextField } from "@mui/material";
import { FC, useCallback, useEffect } from "react";
import { Pagination } from "../../../services/jobHttpClient.adapter";
import useForm from "../../hooks/useForm";
import { useSearchJobsQuery } from "../../hooks/useJobsQuery";
import CheckBox from "../molecules/CheckBox";
import classes from "./SearchJobForm.module.css";
import LoadingPage from "./LoadingPage";

type Props = {
  initialValues: FormInitialValues;
  pagination: Pagination;
};

type FormInitialValues = {
  title: string;
  city: string;
};

const SearchJobForm: FC<Props> = (props) => {
  const { initialValues, pagination } = props;

  // FIXME: move to parent component
  const { values, valueChangeHandler } = useForm(initialValues);
  const { title, city } = values as FormInitialValues;
  const { skip, limit } = pagination;

  // FIXME: move to parent component
  const searchJobsQuery = useSearchJobsQuery({
    searchTerms: { title, city },
    pagination: { skip, limit },
  });

  // FIXME: use react-query dependency to avoid error
  // add `isOnSearch`
  const refetchSearchJobs = useCallback(async () => {
    await searchJobsQuery.refetch();
    // FIXME: temporary ignore warning, fix in another issues
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchJobsHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    refetchSearchJobs();
  };

  // FIXME: add logic
  const checkedHandler = (checkedArr: number[]) => {};

  useEffect(() => {
    refetchSearchJobs();
  }, [skip, limit, refetchSearchJobs]);

  if (searchJobsQuery.isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className={classes["wrapper"]}>
        <div className={classes["SearchJobForm"]}>
          <TextField
            label="Job Title"
            name="title"
            onChange={valueChangeHandler}
            value={title}
            sx={{ mb: 1 }}
            className={classes["SearchJobForm__input"]}
          />
          <TextField
            label="City"
            name="city"
            onChange={valueChangeHandler}
            value={city}
            sx={{ mb: 1 }}
            className={classes["SearchJobForm__input"]}
          />
          <Button
            variant="contained"
            onClick={searchJobsHandler as any}
            className={classes[`SearchJobForm__btn`]}
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

export default SearchJobForm;
