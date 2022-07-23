import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY_STATISTICS } from "../../constants/constants";
import { addSkillsToStatistics } from "../../services/statisticsHttpClient.adapter";

export const useStatisticsMutations = () => {
  const queryClient = useQueryClient();

  const addSkillsToStatisticsMutation = useMutation(addSkillsToStatistics, {
    onSuccess: (data) => {
      console.log(data);

      data.forEach((skillId) => {
        queryClient.invalidateQueries([REACT_QUERY_KEY_STATISTICS, skillId]);
      });
    },
  });

  return { addSkillsToStatisticsMutation };
};
