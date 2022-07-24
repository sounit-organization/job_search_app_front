import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";

type Props = {
  skill: ISkill;
  children?: React.ReactNode;
};

const SkillCard: FC<Props> = (props) => {
  const { skill, children } = props;
  const { title } = skill;

  return (
    <Paper className="px-5 py-3" variant="outlined">
      <Typography variant="body1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default SkillCard;
