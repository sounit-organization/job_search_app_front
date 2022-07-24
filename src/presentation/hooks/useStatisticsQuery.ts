import { useQuery } from "react-query";
import { REACT_QUERY_KEY_STATISTICS } from "../../constants/constants";
import { errorActions } from "../../services/redux/errorSlice";
import { getStatisticsBySkillId } from "../../services/statisticsHttpClient.adapter";
import { useAppDispatch } from "./reduxHooks";

export const useGetStatisticsBySkillIdQuery = (skillId?: string) => {
  const dispatch = useAppDispatch();

  const getStatisticsBySKillIdQuery = useQuery(
    [REACT_QUERY_KEY_STATISTICS, skillId],
    () => getStatisticsBySkillId(skillId),
    {
      enabled: !!skillId,
      onError: () => {
        dispatch(errorActions.setError(`Failed to fetch statistics`));
      },
    }
  );

  return getStatisticsBySKillIdQuery;
};
