import { ISkill } from "../../domain/Skill";
import { SelectedSkillIdsMap } from "../components/organisms/CreateJob/EditJobForm";

export const convertSkillsListToMap = (skillsList: ISkill[]) => {
  const skillsMap: SelectedSkillIdsMap = {};

  for (const skill of skillsList) {
    skillsMap[skill._id!] = skill._id!;
  }

  return skillsMap;
};

export const convertSkillsMapToList = (skillsMap: SelectedSkillIdsMap) => {
  const skillIdList = [];

  for (const skillId of Object.values(skillsMap)) {
    // to remove null
    if (skillId) {
      skillIdList.push(skillId);
    }
  }

  return skillIdList;
};
