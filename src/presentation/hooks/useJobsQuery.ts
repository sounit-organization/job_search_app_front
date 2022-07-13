import { useQuery } from "react-query";
import {
  REACT_QUERY_KEY_GET_JOBS,
  REACT_QUERY_KEY_SEARCH_JOBS,
} from "../../constants/constants";
import {
  getJobs,
  searchJobs,
  SearchTerms,
} from "../../services/jobHttpClient.adapter";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch } from "./reduxHooks";

export const useSearchJobsQuery = (searchTerms: SearchTerms) => {
  const dispatch = useAppDispatch();
  const { title, city } = searchTerms;

  const searchJobsQuery = useQuery(
    [REACT_QUERY_KEY_SEARCH_JOBS, title, city],
    () => searchJobs({ searchTerms }),
    {
      refetchOnWindowFocus: false,
      enabled: false, // disable this query from automatically running
      onError: () => {
        dispatch(errorActions.setError(`Failed to search jobs...`));
      },
    }
  );

  return searchJobsQuery;
};

export const useGetJobsQuery = () => {
  const dispatch = useAppDispatch();

  const getJobsQuery = useQuery(REACT_QUERY_KEY_GET_JOBS, getJobs, {
    onError: () => {
      dispatch(errorActions.setError(`Failed to fetch jobs...`));
    },
  });

  return getJobsQuery;
};
