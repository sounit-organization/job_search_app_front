import { FC } from "react";
import EditJobForm from "../components/organisms/CreateJob/EditJobForm";
import classes from "./CreateJob.module.css";
const CreateJob: FC = () => {
  return (
    <div className={classes[componentName]}>
      <EditJobForm buttonText="Create Job" />
    </div>
  );
};

const componentName = "CreateJob";

export default CreateJob;
