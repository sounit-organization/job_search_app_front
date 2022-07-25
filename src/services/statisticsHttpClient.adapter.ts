import axios from "axios";
import { API_URL } from "../constants/constants";
import { Statistics } from "../domain/Statistics";
import { SelectedSkillsMap } from "../presentation/components/organisms/CreateJob/EditJobForm";

type SkillIdList = string[];

type AddSkillsToStatisticsArgs = {
  skillsMap: SelectedSkillsMap;
  token: string;
};

type UpdateSkillsInStatisticsArgs = {
  jobId: string;
  skillsMap: SelectedSkillsMap;
  token: string;
};

export const addSkillsToStatistics = ({
  skillsMap,
  token,
}: AddSkillsToStatisticsArgs): Promise<SkillIdList> => {
  return axios
    .post(`${API_URL}/statistics`, skillsMap, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
  token,
}: UpdateSkillsInStatisticsArgs): Promise<SkillIdList> => {
  return axios
    .put(`${API_URL}/statistics/${jobId}`, skillsMap, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.skillIdList);
};
