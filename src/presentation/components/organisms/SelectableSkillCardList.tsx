import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import { SelectedSkillsMap } from "./CreateJob/EditJobForm";
import SelectableSkillCard from "./SelectableSkillCard";

type Props = {
  skills?: ISkill[];
  selectedSkillsMap: SelectedSkillsMap;
  setSelectedSkillsMap: React.Dispatch<React.SetStateAction<SelectedSkillsMap>>;
};

const SelectableSkillCardList: FC<Props> = (props) => {
  const { skills, selectedSkillsMap, setSelectedSkillsMap } = props;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1 mb-4">
      {skills?.map((skill) => (
        <SelectableSkillCard
          key={skill._id!}
          skill={skill}
          active={!!selectedSkillsMap[skill._id!]}
          setSelectedSkillsMap={setSelectedSkillsMap}
        />
      ))}
    </div>
  );
};

export default SelectableSkillCardList;
