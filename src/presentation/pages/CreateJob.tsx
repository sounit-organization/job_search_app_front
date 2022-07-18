import { FC } from "react";
import EditJobForm from "../components/organisms/CreateJob/EditJobForm";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import classes from "./CreateJob.module.css";
import { useGetJobsQuery } from "../hooks/useJobsQuery";
import { useJobMutations } from "../hooks/useJobMutations";
import useErrorHandler from "../hooks/useErrorHandler";
import { ISkill } from "../../domain/Skill";

const CreateJob: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { createJobMutation } = useJobMutations();
  const getJobsQuery = useGetJobsQuery();
  const { handleError } = useErrorHandler();
  const { data: jobs } = getJobsQuery;

  const submitLogic = (
    title: string,
    companyName: string,
    payment: string,
    city: string,
    description: string,
    skills: string[]
  ) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }
    createJobMutation.mutate({
      newJob: {
        title,
        companyName,
        city,
        payment: Number(payment),
        description,
        skills,
      },
      token,
    });
  };

  if (getJobsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (createJobMutation.isLoading) {
    return <div>Creating...</div>;
  }

  if (createJobMutation.isError) {
    handleError(createJobMutation.error);
    createJobMutation.reset();
  }
  return (
    <div className={classes[componentName]}>
      <EditJobForm
        buttonText="Create Job"
        initialFormData={{
          title: "",
          company: "",
          city: "",
          payment: "",
          description: "",
        }}
        onSubmitLogic={submitLogic}
      />
    </div>
  );
};

const componentName = "CreateJob";

export default CreateJob;
