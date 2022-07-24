import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ISkill } from "../../../domain/Skill";
import { useAppSelector } from "../../hooks/reduxHooks";
import SkillCard from "./SkillCard";

type Props = {
  skill: ISkill;
};

const EditButtonSkillCard: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { userId: stateUserId } = useAppSelector((state) => state.auth);
  const { skill } = props;
  const { userId, _id: skillId } = skill;

  const editClickHandler = () => {
    navigate(`/skills/${skillId}/edit`);
  };

  return (
    <SkillCard skill={skill}>
      {stateUserId === userId && (
        <Button variant="outlined" onClick={editClickHandler}>
          Edit
        </Button>
      )}
    </SkillCard>
  );
};

export default EditButtonSkillCard;
