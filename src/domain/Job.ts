import { ISkill } from "./Skill";
export interface IJob {
  id: string;
  title: string;
  companyName: string;
  city: string;
  payment: number;
  description: string;
  skills: ISkill[];
}
