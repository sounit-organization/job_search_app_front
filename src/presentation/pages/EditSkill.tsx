import React from "react";
import { useParams } from "react-router-dom";
import EditSkillForm from "../components/organisms/EditSkillForm";
import { useGetSkillByIdQuery } from "../hooks/useSkillsQuery";

const EditSkill = () => {
  const { skillId } = useParams();

  const getSkillByIdQuery = useGetSkillByIdQuery(skillId!);
  const skill = getSkillByIdQuery.data;

  if (getSkillByIdQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getSkillByIdQuery.isError) {
    return <div>Error</div>;
  }

  const submitLogic = () => {
    console.log("Update skill");
  };

  return (
    <EditSkillForm
      buttonText="Update Skill"
      initialFormData={{ title: skill!.title }}
      onSubmitLogic={submitLogic}
    />
  );
};

export default EditSkill;
