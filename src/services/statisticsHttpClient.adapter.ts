import axios from "axios";
import { API_URL } from "../constants/constants";
import { Statistics } from "../domain/Statistics";
import { SelectedSkillsMap } from "../presentation/components/organisms/CreateJob/EditJobForm";

type SkillIdList = string[];

export const addSkillsToStatistics = (
  skillsMap: SelectedSkillsMap
): Promise<SkillIdList> => {
  return axios
    .post(`${API_URL}/statistics`, skillsMap)
    .then((res) => res.data.skillIdList);
};

export const getStatisticsBySkillId = (
  skillId?: string
): Promise<Statistics> => {
  return axios
    .get(`${API_URL}/statistics/${skillId}`)
    .then((res) => res.data.statistics);
};

export const updateSkillsInStatistics = ({
  jobId,
  skillsMap,
}: {
  jobId: string;
  skillsMap: SelectedSkillsMap;
}): Promise<SkillIdList> => {
  return axios
    .put(`${API_URL}/statistics/${jobId}`, skillsMap)
    .then((res) => res.data.skillIdList);
};
