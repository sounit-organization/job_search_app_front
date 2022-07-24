import { ISkill } from "./Skill";

export type Statistics = {
  _id: string;
  primarySkill: ISkill;
  subSkillsMap: { [key: string]: { skill: ISkill; count: number } };
};
