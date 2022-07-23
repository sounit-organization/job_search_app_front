import axios from "axios";
import { API_URL } from "../constants/constants";
import { SelectedSkillsMap } from "../presentation/components/organisms/CreateJob/EditJobForm";

export const addSkillsToStatistics = (skillsMap: SelectedSkillsMap) => {
  return axios.post(`${API_URL}/statistics`, skillsMap).then((res) => res.data);
};
