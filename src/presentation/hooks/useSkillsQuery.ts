import { useQuery } from "react-query";
import { REACT_QUERY_KEY_SKILLS } from "../../constants/constants";
import { ISkill } from "../../domain/Skill";
import { getSkills } from "../../services/skillHttpClient.adapter";

const useSkillsQuery = () => {
  const SkillsQuery = useQuery<ISkill[]>(REACT_QUERY_KEY_SKILLS, getSkills);

  return SkillsQuery;
};

export default useSkillsQuery;
