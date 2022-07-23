import { Paper } from "@mui/material";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import { SelectedSkillsMap } from "./CreateJob/EditJobForm";

type Props = {
  skill: ISkill;
  active: boolean;
  setSelectedSkillsMap: React.Dispatch<React.SetStateAction<SelectedSkillsMap>>;
};

const SelectableSkillCard: FC<Props> = (props) => {
  const { skill, active, setSelectedSkillsMap } = props;

  const clickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    if (active) {
      setSelectedSkillsMap((prevState) => ({
        ...prevState,
        [skill._id!]: null,
      }));
    } else {
      setSelectedSkillsMap((prevState) => ({
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
