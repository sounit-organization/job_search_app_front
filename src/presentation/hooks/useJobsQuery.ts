import { useCallback } from "react";
import { useQuery } from "react-query";
import {
  REACT_QUERY_KEY_GET_JOBS,
  REACT_QUERY_KEY_SEARCH_JOBS,
} from "../../constants/constants";
import {
  getJobs,
  Pagination,
  searchJobs,
  SearchTerms,
} from "../../services/jobHttpClient.adapter";
import { errorActions } from "../../services/redux/errorSlice";
import { jobActions } from "../../services/redux/jobSlice";
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

export const useGetJobsQuery = (pagination: Pagination) => {
  const dispatch = useAppDispatch();
  const { skip, limit } = pagination;

  const getJobsQuery = useQuery(
    [REACT_QUERY_KEY_GET_JOBS, `skip=${skip}`, `limit=${limit}`],
    () => getJobs({ pagination }),
    {
      onSuccess: (data) => {
        dispatch(jobActions.setJobs(data));
      },
      onError: () => {
        dispatch(errorActions.setError(`Failed to fetch jobs...`));
      },
    }
  );

  return getJobsQuery;
};
