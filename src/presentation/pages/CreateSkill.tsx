import { FC } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useGetSkillsQuery } from "../hooks/useSkillsQuery";
import classes from "./CreateSkill.module.css";
import SkillCard from "../components/organisms/SkillCard";
import EditSkillForm from "../components/organisms/EditSkillForm";
import { useSkillMutations } from "../hooks/useSkillMutations";
import useErrorHandler from "../hooks/useErrorHandler";
import LoadingPage from "../components/organisms/LoadingPage";

const CreateSkill: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const getSkillsQuery = useGetSkillsQuery();
  const { createSkillMutation } = useSkillMutations();
  const { handleError } = useErrorHandler();

  const { data: skills } = getSkillsQuery;

  const submitLogic = (title: string) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }
    createSkillMutation.mutate({ newSkill: { title }, token });
  };

  if (getSkillsQuery.isLoading) {
    return <LoadingPage />;
  }

  if (createSkillMutation.isLoading) {
    return <LoadingPage />;
  }

  if (createSkillMutation.isError) {
    handleError(createSkillMutation.error);
    createSkillMutation.reset();
  }

  return (
    <div className={classes[componentName]}>
      <EditSkillForm
        buttonText="Create Skill"
        initialFormData={{ title: "" }}
        onSubmitLogic={submitLogic}
      />
      <div className="grid grid-cols-4 gap-4">
        {skills?.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const componentName = "CreateSkill";

export default CreateSkill;
