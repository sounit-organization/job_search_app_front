import { useParams } from "react-router-dom";
import { errorActions } from "../../services/redux/errorSlice";
import EditSkillForm from "../components/organisms/EditSkillForm";
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
    return <div>Loading...</div>;
  }

  if (getSkillByIdQuery.isError) {
    return <div>Get Skill Error</div>;
  }

  if (updateSkillMutation.isLoading) {
    return <div>Updating....</div>;
  }

  if (updateSkillMutation.isError) {
    handleError(updateSkillMutation.error);
    updateSkillMutation.reset();
  }

  return (
    <EditSkillForm
      buttonText="Update Skill"
      initialFormData={{ ...skill! }}
      onSubmitLogic={submitLogic}
    />
  );
};

export default EditSkill;
