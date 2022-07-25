import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY_STATISTICS } from "../../constants/constants";
import {
  addSkillsToStatistics,
  updateSkillsInStatistics,
} from "../../services/statisticsHttpClient.adapter";
import useErrorHandler from "./useErrorHandler";

export const useStatisticsMutations = () => {
  const queryClient = useQueryClient();
  const { handleError } = useErrorHandler();

  const addSkillsToStatisticsMutation = useMutation(addSkillsToStatistics, {
    onSuccess: (data) => {
      data.forEach((skillId) => {
        queryClient.invalidateQueries([REACT_QUERY_KEY_STATISTICS, skillId]);
      });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const updateSkillsInStatisticsMutation = useMutation(
    updateSkillsInStatistics,
    {
      onSuccess: (data) => {
        data.forEach((skillId) => {
          queryClient.invalidateQueries([REACT_QUERY_KEY_STATISTICS, skillId]);
        });
      },
      onError: (error) => {
        handleError(error);
      },
    }
  );

  return { addSkillsToStatisticsMutation, updateSkillsInStatisticsMutation };
};
