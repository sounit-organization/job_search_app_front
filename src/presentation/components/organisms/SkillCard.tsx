import { Button, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ISkill } from "../../../domain/Skill";
import { useAppSelector } from "../../hooks/reduxHooks";

type Props = {
  skill: ISkill;
};

const SkillCard: FC<Props> = (props) => {
  const navigate = useNavigate();

  const { userId: stateUserId } = useAppSelector((state) => state.auth);
  const { title, userId, _id: skillId } = props.skill;

  const editClickHandler = () => {
    navigate(`/skills/${skillId}/edit`);
  };

  return (
    <Paper className="px-5 py-3" variant="outlined">
      <Typography variant="body1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {stateUserId === userId && (
        <Button variant="outlined" onClick={editClickHandler}>
          Edit
        </Button>
      )}
    </Paper>
  );
};

export default SkillCard;
