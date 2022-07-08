import { Paper } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";

type Props = {
  skill: ISkill;
};

const SkillCard: FC<Props> = (props) => {
  const { title, userId } = props.skill;
  return (
    <Paper elevation={1} className="px-5 py-3">
      {title}
    </Paper>
  );
};

export default SkillCard;
