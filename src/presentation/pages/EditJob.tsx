import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { IJob } from "../../domain/Job";
import { ISkill } from "../../domain/Skill";
import { errorActions } from "../../services/redux/errorSlice";
import EditJobForm from "../components/organisms/CreateJob/EditJobForm";
import LoadingPage from "../components/organisms/LoadingPage";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useJobMutations } from "../hooks/useJobMutations";
import { useGetJobByIdQuery } from "../hooks/useJobsQuery";
import { convertSkillsListToMap } from "../utils/utils";

const EditJob = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const getJobByIdQuery = useGetJobByIdQuery(jobId);
  const { token } = useAppSelector((state) => state.auth);
  const { updateJobMutation } = useJobMutations();

  const goBackHandler = () => {
    navigate(-1);
  };

  const submitLogic = (jobFormData: IJob) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to update job: No token found`)
      );
    }

    updateJobMutation.mutate({
      jobFormData,
      token,
      jobId: jobId!,
    });
  };

  if (getJobByIdQuery.isLoading) {
    return <LoadingPage />;
  }

  if (updateJobMutation.isLoading) {
    return <LoadingPage />;
  }

  const { city, companyName, description, payment, skills, title } =
    getJobByIdQuery.data as IJob;
  const skillsMap = convertSkillsListToMap(skills as ISkill[]);

  return (
    <Container className="md:max-w-4xl">
      <EditJobForm
        buttonText="Update Job"
        initialFormData={{
          city,
          companyName,
          description,
          payment: payment ? String(payment) : "",
          title,
        }}
        onSubmitLogic={submitLogic}
        initialSkillsMap={skillsMap}
      />
      <div className="grid justify-center">
        <Button onClick={goBackHandler}>Go Back</Button>
      </div>
    </Container>
  );
};

export default EditJob;
