import { ISkill } from "./Skill";
export interface IJob {
  id: string;
  title: string;
  componentName: string;
  city: string;
  payment: string;
  description: string;
  skills: ISkill[];
}
