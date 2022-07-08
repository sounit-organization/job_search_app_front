import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { REACT_QUERY_KEY_SKILLS } from "../../constants/constants";
import { ISkill } from "../../domain/Skill";
import {
  createSkill,
  updateSkill,
} from "../../services/skillHttpClient.adapter";

export const useSkillMutations = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // https://qiita.com/suzuki0430/items/1812e600797bba661cef
  const createSkillMutation = useMutation<
    ISkill,
    Error,
    { newSkill: ISkill; token: string }
  >(createSkill, {
    onSuccess: () => {
      queryClient.invalidateQueries(REACT_QUERY_KEY_SKILLS);
    },
  });

  const updateSkillMutation = useMutation<
    ISkill,
    Error,
    { updatedSkill: ISkill; token: string; skillId: string }
  >(updateSkill, {
    onSuccess: (data) => {
      queryClient.setQueryData([REACT_QUERY_KEY_SKILLS, data._id], data);
      queryClient.invalidateQueries(REACT_QUERY_KEY_SKILLS);

      navigate("/skills/new");
    },
  });

  return {
    createSkillMutation,
    updateSkillMutation,
  };
};
