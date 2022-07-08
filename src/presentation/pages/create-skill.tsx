import { FC } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useGetSkillsQuery } from "../hooks/useSkillsQuery";
import classes from "./create-skill.module.css";
import SkillCard from "../components/organisms/SkillCard";
import EditSkillForm from "../components/organisms/EditSkillForm";
import { useSkillMutations } from "../hooks/useSkillMutations";

const CreateSkill: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const getSkillsQuery = useGetSkillsQuery();
  const { createSkillMutation } = useSkillMutations();

  const { data: skills } = getSkillsQuery;

  if (getSkillsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getSkillsQuery.isError) {
    console.log("isError");
    console.log(getSkillsQuery.error as Error);

    dispatch(
      errorActions.setError(
        `Failed to create skill: ${getSkillsQuery.error as Error}`
      )
    );
  }

  const submitLogic = (title: string) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }
    createSkillMutation.mutate({ newSkill: { title }, token });
  };

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
