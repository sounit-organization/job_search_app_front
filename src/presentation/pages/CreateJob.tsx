import { FC } from "react";
import JobForm from "../components/organisms/CreateJob/JobForm";
import classes from "./CreateJob.module.css";

const CreateJob: FC = () => {
  return (
    <div className={classes[componentName]}>
      <JobForm className={classes[`${componentName}__form`]} />
    </div>
  );
};

const componentName = "CreateJob";

export default CreateJob;
