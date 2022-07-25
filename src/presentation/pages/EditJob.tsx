import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import { IJob } from "../../domain/Job";
import { ISkill } from "../../domain/Skill";
import { errorActions } from "../../services/redux/errorSlice";
import BackButton from "../components/organisms/BackButton";
import EditJobForm, {
  SelectedSkillsMap,
} from "../components/organisms/CreateJob/EditJobForm";
import LoadingPage from "../components/organisms/LoadingPage";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useJobMutations } from "../hooks/useJobMutations";
import { useGetJobByIdQuery } from "../hooks/useJobsQuery";
import { useStatisticsMutations } from "../hooks/useStatisticsMutations";
import { convertSkillsListToMap } from "../utils/utils";

const EditJob = () => {
  const dispatch = useAppDispatch();
  const { jobId } = useParams();
  const getJobByIdQuery = useGetJobByIdQuery(jobId);
  const { token } = useAppSelector((state) => state.auth);
  const { updateJobMutation } = useJobMutations();
  const { updateSkillsInStatisticsMutation } = useStatisticsMutations();

  const submitLogic = async (
    jobFormData: IJob,
    skillsMap: SelectedSkillsMap
  ) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to update job: No token found`)
      );
    }

    // update statistic first,
    // to get old skills in job to delete from statistics
    updateSkillsInStatisticsMutation.mutate({
      jobId: jobId!,
      skillsMap,
      token,
    });

    updateJobMutation.mutate({
      jobFormData,
      token,
      jobId: jobId!,
    });
  };

  if (
    getJobByIdQuery.isLoading ||
    updateJobMutation.isLoading ||
    updateSkillsInStatisticsMutation.isLoading
  ) {
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
        <BackButton />
      </div>
    </Container>
  );
};

export default EditJob;
