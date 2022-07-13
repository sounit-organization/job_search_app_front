import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import SkillTag from "./SkillTag";
import classes from "./SkillTagList.module.css";

type Props = {
  skills: ISkill[];
};

const SkillTagList: FC<Props> = (props) => {
  const { skills } = props;
  return (
    <div className={classes["skillTagList"]}>
      {skills &&
        skills.map((skill) => <SkillTag key={skill._id} skill={skill} />)}
    </div>
  );
};

export default SkillTagList;
