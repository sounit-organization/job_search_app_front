import { ISkill } from "../../domain/Skill";
import { SelectedSkillsMap } from "../components/organisms/CreateJob/EditJobForm";

export const convertSkillsListToMap = (skillsList: ISkill[]) => {
  const skillsMap: SelectedSkillsMap = {};

  for (const skill of skillsList) {
    skillsMap[skill._id!] = skill;
  }

  return skillsMap;
};

export const convertSkillsMapToList = (skillsMap: SelectedSkillsMap) => {
  const skillIdList: string[] = [];

  for (const skill of Object.values(skillsMap)) {
    // to remove null
    if (skill) {
      skillIdList.push(skill._id!);
    }
  }

  return skillIdList;
};
