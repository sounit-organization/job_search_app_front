import { ISkill } from "./Skill";
export interface IJob {
  _id?: string;
  title: string;
  companyName: string;
  city: string;
  payment: number;
  description: string;
  skills: string[] | ISkill[];
  userId?: string;
}
