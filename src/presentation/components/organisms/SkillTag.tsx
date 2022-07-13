import { Chip } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";

type Props = {
  skill: ISkill;
  className: string;
};

const SkillTag: FC<Props> = (props) => {
  const { skill, className } = props;
  const { title } = skill;

  return <Chip className={className} label={title} color="primary" />;
};

export default SkillTag;
