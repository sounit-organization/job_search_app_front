import { useQuery } from "react-query";
import { REACT_QUERY_KEY_SKILLS } from "../../constants/constants";
import { ISkill } from "../../domain/Skill";
import { errorActions } from "../../services/redux/errorSlice";
import {
  getSkillById,
  getSkills,
} from "../../services/skillHttpClient.adapter";
import { useAppDispatch } from "./reduxHooks";

export const useGetSkillsQuery = () => {
  const dispatch = useAppDispatch();

  const getSkillsQuery = useQuery<ISkill[]>(REACT_QUERY_KEY_SKILLS, getSkills, {
    onError: () => {
      dispatch(errorActions.setError(`Failed to fetch skills`));
    },
  });

  return getSkillsQuery;
};

export const useGetSkillByIdQuery = (skillId: string) => {
  const getSkillByIdQuery = useQuery([REACT_QUERY_KEY_SKILLS, skillId], () =>
    getSkillById(skillId!)
  );
  return getSkillByIdQuery;
};
