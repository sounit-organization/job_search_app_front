import { useQuery } from "react-query";
import { REACT_QUERY_KEY_SKILLS } from "../../constants/constants";
import { ISkill } from "../../domain/Skill";
import {
  getSkillById,
  getSkills,
} from "../../services/skillHttpClient.adapter";

export const useGetSkillsQuery = () => {
  const getSkillsQuery = useQuery<ISkill[]>(REACT_QUERY_KEY_SKILLS, getSkills);

  return getSkillsQuery;
};

export const useGetSkillByIdQuery = (skillId: string) => {
  const getSkillByIdQuery = useQuery([REACT_QUERY_KEY_SKILLS, skillId], () =>
    getSkillById(skillId!)
  );
  return getSkillByIdQuery;
};
