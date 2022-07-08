import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY_SKILLS } from "../../constants/constants";
import { ISkill } from "../../domain/Skill";
import { createSkill } from "../../services/skillHttpClient.adapter";

export const useSkillMutations = () => {
  const queryClient = useQueryClient();

  // https://qiita.com/suzuki0430/items/1812e600797bba661cef
  const createSkillMutation = useMutation<
    ISkill,
    Error,
    { newSkill: ISkill; token: string }
  >(createSkill as any, {
    onSuccess: () => {
      queryClient.invalidateQueries(REACT_QUERY_KEY_SKILLS);
    },
  });

  return {
    createSkillMutation,
  };
};
