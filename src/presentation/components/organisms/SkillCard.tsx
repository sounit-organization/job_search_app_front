import { Button, Paper } from "@mui/material";
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
    <Paper elevation={1} className="px-5 py-3">
      {title}
      {stateUserId === userId && (
        <div>
          <Button variant="outlined" onClick={editClickHandler}>
            Edit
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default SkillCard;
