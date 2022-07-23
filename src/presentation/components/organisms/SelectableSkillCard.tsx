import { Paper } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import { SelectedSkillIdsMap } from "./CreateJob/EditJobForm";

type Props = {
  skill: ISkill;
  active: boolean;
  setSelectedSkillIdsMap: React.Dispatch<
    React.SetStateAction<SelectedSkillIdsMap>
  >;
};

const SelectableSkillCard: FC<Props> = (props) => {
  const { skill, active, setSelectedSkillIdsMap } = props;

  const clickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    if (active) {
      setSelectedSkillIdsMap((prevState) => ({
        ...prevState,
        [skill._id!]: null,
      }));
    } else {
      setSelectedSkillIdsMap((prevState) => ({
        ...prevState,
        [skill._id!]: skill,
      }));
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1,
        color: active ? "white" : "inherit",
        backgroundColor: active ? "#90caf9" : "#eeeeee",
      }}
      onClick={clickHandler}
      className="cursor-pointer"
    >
      <p>{skill.title}</p>
    </Paper>
  );
};

export default SelectableSkillCard;
