import { FC } from "react";
import EditJobForm from "../components/organisms/CreateJob/EditJobForm";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import classes from "./CreateJob.module.css";
import { useJobMutations } from "../hooks/useJobMutations";
import useErrorHandler from "../hooks/useErrorHandler";
import LoadingPage from "../components/organisms/LoadingPage";

const initialFormValues = {
  title: "",
  company: "",
  city: "",
  payment: "",
  description: "",
};

const CreateJob: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { createJobMutation } = useJobMutations();
  const { handleError } = useErrorHandler();

  const submitLogic = (
    title: string,
    companyName: string,
    payment: string,
    city: string,
    description: string,
    skills: (string | null)[]
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

  if (createJobMutation.isLoading) {
    return <LoadingPage />;
  }

  if (createJobMutation.isError) {
    handleError(createJobMutation.error);
    createJobMutation.reset();
  }

  return (
    <div className={classes["CreateJob"]}>
      <EditJobForm
        buttonText="Create Job"
        initialFormData={initialFormValues}
        onSubmitLogic={submitLogic}
      />
    </div>
  );
};

export default CreateJob;
