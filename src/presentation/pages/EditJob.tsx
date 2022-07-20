import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { IJob } from "../../domain/Job";
import { ISkill } from "../../domain/Skill";
import EditJobForm from "../components/organisms/CreateJob/EditJobForm";
import LoadingPage from "../components/organisms/LoadingPage";
import { useGetJobByIdQuery } from "../hooks/useJobsQuery";
import { convertSkillsListToMap } from "../utils/utils";

const EditJob = () => {
  const { jobId } = useParams();
  const getJobByIdQuery = useGetJobByIdQuery(jobId);
  const navigate = useNavigate();

  if (getJobByIdQuery.isLoading) {
    return <LoadingPage />;
  }

  const goBackHandler = () => {
    navigate(-1);
  };

  const { city, companyName, description, payment, skills, title } =
    getJobByIdQuery.data as IJob;
  const skillsMap = convertSkillsListToMap(skills as ISkill[]);

  return (
    <Container>
      <EditJobForm
        buttonText="Update Job"
        initialFormData={{
          city,
          companyName,
          description,
          payment: payment ? String(payment) : "",
          title,
        }}
        onSubmitLogic={() => {}}
        initialSkillsMap={skillsMap}
      />
      <div className="grid justify-center">
        <Button onClick={goBackHandler}>Go Back</Button>
      </div>
    </Container>
  );
};

export default EditJob;
