import { FC } from "react";
import EditJobForm, {
  SelectedSkillsMap,
} from "../components/organisms/CreateJob/EditJobForm";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useJobMutations } from "../hooks/useJobMutations";
import useErrorHandler from "../hooks/useErrorHandler";
import LoadingPage from "../components/organisms/LoadingPage";
import { IJob } from "../../domain/Job";
import { Container } from "@mui/material";
import { useStatisticsMutations } from "../hooks/useStatisticsMutations";

const initialFormValues = {
  title: "",
  companyName: "",
  city: "",
  payment: "",
  description: "",
};

const CreateJob: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const { createJobMutation } = useJobMutations();
  const { addSkillsToStatisticsMutation } = useStatisticsMutations();
  const { handleError } = useErrorHandler();

  const submitLogic = async (job: IJob, skillsMap: SelectedSkillsMap) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create job: No token found`)
      );
    }

    addSkillsToStatisticsMutation.mutate({ skillsMap, token });

    createJobMutation.mutate({
      newJob: job,
      token,
    });
  };

  if (createJobMutation.isLoading || addSkillsToStatisticsMutation.isLoading) {
    return <LoadingPage />;
  }

  if (createJobMutation.isError) {
    handleError(createJobMutation.error);
    createJobMutation.reset();
  }

  return (
    <Container className="mb-10 md:max-w-4xl">
      <EditJobForm
        buttonText="Create Job"
        initialFormData={initialFormValues}
        onSubmitLogic={submitLogic}
        initialSkillsMap={{}}
      />
    </Container>
  );
};

export default CreateJob;
