import { useQuery } from "react-query";
import { REACT_QUERY_KEY_JOBS } from "../../constants/constants";
import { IJob } from "../../domain/Job";
import { errorActions } from "../../services/redux/errorSlice";
import { getJobs, getJobById } from "../../services/jobsHttpClient.adapter";
import { useAppDispatch } from "./reduxHooks";
import { REACT_QUERY_KEY_SEARCH_JOBS } from "../../constants/constants";
import { searchJobs, SearchTerms } from "../../services/jobHttpClient.adapter";
export const useGetJobsQuery = () => {
  const dispatch = useAppDispatch();

  const getJobsQuery = useQuery<IJob[]>(REACT_QUERY_KEY_JOBS, getJobs, {
    onError: () => {
      dispatch(errorActions.setError(`Failed to fetch jobs`));
    },
  });
  return getJobsQuery;
};

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

export const useGetJobByIdQuery = (jobId: string) => {
  const getJobByIdQuery = useQuery([REACT_QUERY_KEY_JOBS, jobId], () =>
    getJobById(jobId!)
  );
  return getJobByIdQuery;
};
