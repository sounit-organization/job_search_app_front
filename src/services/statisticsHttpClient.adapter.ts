import axios from "axios";
import { API_URL } from "../constants/constants";
import { SelectedSkillsMap } from "../presentation/components/organisms/CreateJob/EditJobForm";

type SkillIdList = string[];

export const addSkillsToStatistics = (
  skillsMap: SelectedSkillsMap
): Promise<SkillIdList> => {
  return axios.post(`${API_URL}/statistics`, skillsMap).then((res) => res.data);
};
