import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ISkill } from "../../../domain/Skill";
import SkillCard from "./SkillCard";

type Props = {
  skill: ISkill;
};

const StaticsButtonSkillCard: FC<Props> = (props) => {
  const { skill } = props;

  return (
    <SkillCard skill={skill}>
      <Button variant="outlined">
        <Link to={`/statistics/${skill._id}`}>Statistics</Link>
      </Button>
    </SkillCard>
  );
};

export default StaticsButtonSkillCard;
