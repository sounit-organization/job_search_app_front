import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import EditButtonSkillCard from "./EditButtonSkillCard";
import SkillCardList from "./SkillCardList";

type Props = {
  skills: ISkill[];
};

const EditButtonSkillCardList: FC<Props> = (props) => {
  const { skills } = props;
  return (
    <SkillCardList>
      <>
        {skills?.map((skill) => (
          <EditButtonSkillCard key={skill._id} skill={skill} />
        ))}
      </>
    </SkillCardList>
  );
};

export default EditButtonSkillCardList;
