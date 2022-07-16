import { Button, TextField } from "@mui/material";
import { FC } from "react";
import CheckBox from "../molecules/CheckBox";
import classes from "./SearchJobForm.module.css";

type Props = {
  initialValues: FormInitialValues;
  initPagination: () => void;
  setIsOnSearch: React.Dispatch<React.SetStateAction<boolean>>;
  valueChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

type FormInitialValues = {
  title: string;
  city: string;
};

const SearchJobForm: FC<Props> = (props) => {
  const { initialValues, initPagination, setIsOnSearch, valueChangeHandler } =
    props;
  const { title, city } = initialValues;

  const searchJobsHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();

    // fire search-job react-query
    setIsOnSearch(true);

    initPagination();
  };

  // FIXME: add logic
  const checkedHandler = (checkedArr: number[]) => {};

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
