import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import { SelectedSkillIdsMap } from "./CreateJob/EditJobForm";
import SelectableSkillCard from "./SelectableSkillCard";

type Props = {
  skills?: ISkill[];
  selectedSkillIdsMap: SelectedSkillIdsMap;
  setSelectedSkillIdsMap: React.Dispatch<
    React.SetStateAction<SelectedSkillIdsMap>
  >;
};

const SelectableSkillCardList: FC<Props> = (props) => {
  const { skills, selectedSkillIdsMap, setSelectedSkillIdsMap } = props;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1 mb-4">
      {skills?.map((skill) => (
        <SelectableSkillCard
          key={skill._id!}
          skill={skill}
          active={!!selectedSkillIdsMap[skill._id!]}
          setSelectedSkillIdsMap={setSelectedSkillIdsMap}
        />
      ))}
    </div>
  );
};

export default SelectableSkillCardList;
