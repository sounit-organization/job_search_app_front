import { API_URL } from "../constants/constants";
import { ISkill } from "../domain/Skill";
import httpClientAdapter from "./httpClient.adapter";

export const getSkills = (): Promise<ISkill[]> => {
  return httpClientAdapter
    .get(`${API_URL}/skills`)
    .then((res) => res.data.skills);
};

export const createSkill = (newSkill: ISkill, token: string) => {
  return httpClientAdapter
    .post(`${API_URL}/skills`, newSkill, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
