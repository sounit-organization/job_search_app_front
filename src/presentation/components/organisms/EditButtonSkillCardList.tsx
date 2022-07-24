import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import EditButtonSkillCard from "./EditButtonSkillCard";

type Props = {
  skills: ISkill[];
};

const EditButtonSkillCardList: FC<Props> = (props) => {
  const { skills } = props;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
      {skills?.map((skill) => (
        <EditButtonSkillCard key={skill._id} skill={skill} />
      ))}
    </div>
  );
};

export default EditButtonSkillCardList;
