import { useQuery } from "react-query";
import {
  REACT_QUERY_KEY_GET_JOBS,
  REACT_QUERY_KEY_SEARCH_JOBS,
} from "../../constants/constants";
import {
  getJobs,
  Pagination,
  searchJobs,
  SearchJobsArgs,
} from "../../services/jobHttpClient.adapter";
import { errorActions } from "../../services/redux/errorSlice";
import { jobActions } from "../../services/redux/jobSlice";
import { searchedJobsActions } from "../../services/redux/searchedJobsSlice";
import { useAppDispatch } from "./reduxHooks";

export const useSearchJobsQuery = (searchJobsArgs: SearchJobsArgs) => {
  const dispatch = useAppDispatch();
  const { searchTerms, pagination, isOnSearch, setIsOnSearch } = searchJobsArgs;
  const { title, city } = searchTerms;
  const { skip, limit } = pagination;

  const searchJobsQuery = useQuery(
    [
      REACT_QUERY_KEY_SEARCH_JOBS,
      title,
      city,
      `skip=${skip}`,
      `limit=${limit}`,
    ],
    () => searchJobs({ searchTerms, pagination }),
    {
      // set dependency to react-query
      enabled: isOnSearch,
      onSuccess: (data) => {
        setIsOnSearch!(false);
        dispatch(searchedJobsActions.setSearchedJobs(data));
      },
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
    () => getJobs(pagination),
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
