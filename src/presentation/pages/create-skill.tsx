import { FC } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useGetSkillsQuery } from "../hooks/useSkillsQuery";
import classes from "./create-skill.module.css";
import SkillCard from "../components/organisms/SkillCard";
import CreateSkillForm from "../components/organisms/CreateSkillForm";

const CreateSkill: FC = () => {
  const dispatch = useAppDispatch();
  const getSkillsQuery = useGetSkillsQuery();

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
