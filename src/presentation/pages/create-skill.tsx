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

  const submitLogic = (title: string) => {
    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }
    createSkillMutation.mutate({ newSkill: { title }, token });
  };

  if (getSkillsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (createSkillMutation.isLoading) {
    return <div>Creating...</div>;
  }

  if (createSkillMutation.isError) {
    console.log("skillError", createSkillMutation.error);

    dispatch(
      errorActions.setError(
        `Failed to create skill: ${createSkillMutation.error as Error}`
      )
    );

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
