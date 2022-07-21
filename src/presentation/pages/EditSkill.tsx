import { Button, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { errorActions } from "../../services/redux/errorSlice";
import EditSkillForm from "../components/organisms/EditSkillForm";
import LoadingPage from "../components/organisms/LoadingPage";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useErrorHandler from "../hooks/useErrorHandler";
import { useSkillMutations } from "../hooks/useSkillMutations";
import { useGetSkillByIdQuery } from "../hooks/useSkillsQuery";

const EditSkill = () => {
  const dispatch = useAppDispatch();
  const { skillId } = useParams();
  const { token } = useAppSelector((state) => state.auth);
  const { updateSkillMutation } = useSkillMutations();
  const { handleError } = useErrorHandler();

  const getSkillByIdQuery = useGetSkillByIdQuery(skillId!);
  const skill = getSkillByIdQuery.data;

  const submitLogic = (title: string) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }

    if (!skillId) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No skillId found`)
      );
    }

    updateSkillMutation.mutate({ updatedSkill: { title }, token, skillId });
  };

  if (getSkillByIdQuery.isLoading) {
    return <LoadingPage />;
  }

  if (getSkillByIdQuery.isError) {
    return <div>Get Skill Error</div>;
  }

  if (updateSkillMutation.isLoading) {
    return <LoadingPage />;
  }

  if (updateSkillMutation.isError) {
    handleError(updateSkillMutation.error);
    updateSkillMutation.reset();
  }

  return (
    <Container className="md:max-w-4xl">
      <div className="flex justify-center flex-col">
        <EditSkillForm
          buttonText="Update Skill"
          initialFormData={{ ...skill! }}
          onSubmitLogic={submitLogic}
        />
        <Button>
          <Link to="/skills/new">Back to Skills</Link>
        </Button>
      </div>
    </Container>
  );
};

export default EditSkill;
