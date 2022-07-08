import { FC, FormEvent } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import CreateButton from "../components/atoms/create-button";
import Input from "../components/atoms/input";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useSkillMutations } from "../hooks/useSkillMutations";
import useForm from "../hooks/useForm";
import useSkillsQuery from "../hooks/useSkillsQuery";
import classes from "./create-skill.module.css";
import SkillCard from "../components/organisms/SkillCard";

const formInitialValues = {
  title: "",
};

const CreateSkill: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const skillsQuery = useSkillsQuery();
  const { createSkillMutation } = useSkillMutations();
  const { data: skills } = skillsQuery;

  const { values, valueChangeHandler, resetValues } =
    useForm(formInitialValues);
  const { title } = values;

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      return dispatch(
        errorActions.setError(`Failed to create skill: No token found`)
      );
    }

    createSkillMutation.mutate({ newSkill: { title }, token });

    resetValues();
  };

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
      <form onSubmit={formSubmitHandler}>
        {/* FIXME: replace with mui-v5 component */}
        <Input
          name="title"
          placeholder="Title"
          className={classes[`${componentName}__input`]}
          value={title}
          onChange={valueChangeHandler}
        />
        <CreateButton
          title="Add Skill"
          className={classes[`${componentName}__btn`]}
        />
      </form>
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
