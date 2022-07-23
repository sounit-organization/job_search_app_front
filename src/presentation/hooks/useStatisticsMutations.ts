import { useMutation } from "react-query";
import { addSkillsToStatistics } from "../../services/statisticsHttpClient.adapter";

export const useStatisticsMutations = () => {
  const addSkillsToStatisticsMutation = useMutation(addSkillsToStatistics, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { addSkillsToStatisticsMutation };
};
