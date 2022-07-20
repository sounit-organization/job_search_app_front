import { FC, FormEvent, useState } from "react";
import classes from "./EditJobForm.module.css";
import { TextField, Button } from "@mui/material";
import useForm, { FormInitialValues } from "../../../hooks/useForm";
import { useGetSkillsQuery } from "../../../hooks/useSkillsQuery";
import LoadingPage from "../LoadingPage";
import SelectableSkillCardList from "../SelectableSkillCardList";
import { IJob } from "../../../../domain/Job";
import { convertSkillsMapToList } from "../../../utils/utils";

type Props = {
  initialFormData: FormInitialValues;
  buttonText: string;
  onSubmitLogic: (job: IJob) => void;
  initialSkillsMap: SelectedSkillIdsMap;
};

export type SelectedSkillIdsMap = {
  [key: string]: string | null;
};

const EditJobForm: FC<Props> = (props) => {
  const { initialFormData, buttonText, onSubmitLogic, initialSkillsMap } =
    props;
  const { values, valueChangeHandler, resetValues } = useForm(initialFormData);
  const { title, company, payment, city, description } = values;
  const getSkillsQuery = useGetSkillsQuery();
  const [selectedSkillIdsMap, setSelectedSkillIdsMap] =
    useState<SelectedSkillIdsMap>(initialSkillsMap);

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedSkillIdsList = convertSkillsMapToList(selectedSkillIdsMap);

    const jobData: IJob = {
      title,
      companyName: company,
      payment: +payment,
      city,
      description,
      skills: selectedSkillIdsList,
    };

    onSubmitLogic(jobData);

    resetValues();
  };

  if (getSkillsQuery.isLoading) {
    return <LoadingPage />;
  }

  return (
    <form className={classes["JobForm"]} onSubmit={formSubmitHandler}>
      <div className={classes[`JobForm__control`]}>
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
          type="number"
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

      <SelectableSkillCardList
        skills={getSkillsQuery.data}
        selectedSkillIdsMap={selectedSkillIdsMap}
        setSelectedSkillIdsMap={setSelectedSkillIdsMap}
      />

      <Button type="submit" variant="outlined">
        {buttonText}
      </Button>
    </form>
  );
};

export default EditJobForm;
