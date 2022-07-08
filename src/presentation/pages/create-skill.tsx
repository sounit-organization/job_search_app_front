import { FC } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import useSkillsQuery from "../hooks/useSkillsQuery";
import classes from "./create-skill.module.css";
import SkillCard from "../components/organisms/SkillCard";
import CreateSkillForm from "../components/organisms/CreateSkillForm";

const CreateSkill: FC = () => {
  const dispatch = useAppDispatch();
  const skillsQuery = useSkillsQuery();

  const { data: skills } = skillsQuery;

  if (skillsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (skillsQuery.isError) {
    console.log("isError");
    console.log(skillsQuery.error as Error);

    dispatch(
      errorActions.setError(
        `Failed to create skill: ${skillsQuery.error as Error}`
      )
    );
  }

  return (
    <div className={classes[componentName]}>
      <CreateSkillForm />
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
