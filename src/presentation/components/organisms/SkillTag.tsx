import { Chip } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";

type Props = {
  skill: ISkill;
};

const SkillTag: FC<Props> = (props) => {
  const { skill } = props;
  const { title } = skill;

  return <Chip label={title} color="primary" />;
};

export default SkillTag;
