import { API_URL } from "../constants/constants";
import { ISkill } from "../domain/Skill";
import httpClientAdapter from "./httpClient.adapter";

export const getSkills = (): Promise<ISkill[]> => {
  return httpClientAdapter
    .get(`${API_URL}/skills`)
    .then((res) => res.data.skills);
};

export const getSkillById = (skillId: string): Promise<ISkill> => {
  return httpClientAdapter
    .get(`${API_URL}/skills/${skillId}`)
    .then((res) => res.data.skill);
};

export const createSkill = ({
  newSkill,
  token,
}: {
  newSkill: ISkill;
  token: string;
}): Promise<ISkill> => {
  return httpClientAdapter
    .post(`${API_URL}/skills`, newSkill, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const updateSkill = ({
  updatedSkill,
  token,
  skillId,
}: {
  updatedSkill: ISkill;
  token: string;
  skillId: string;
}): Promise<ISkill> => {
  return httpClientAdapter
    .patch(`${API_URL}/skills/${skillId}`, updatedSkill, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
