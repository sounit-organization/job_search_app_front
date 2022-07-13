import { useQuery } from "react-query";
import { REACT_QUERY_KEY_JOBS } from "../../constants/constants";
import { IJob } from "../../domain/Job";
import { errorActions } from "../../services/redux/errorSlice";
import { getJobs, getJobById } from "../../services/jobsHttpClient.adapter";
import { useAppDispatch } from "./reduxHooks";

export const useGetJobsQuery = () => {
  const dispatch = useAppDispatch();

  const getJobsQuery = useQuery<IJob[]>(REACT_QUERY_KEY_JOBS, getJobs, {
    onError: () => {
      dispatch(errorActions.setError(`Failed to fetch jobs`));
    },
  });

  return getJobsQuery;
};

export const useGetJobByIdQuery = (jobId: string) => {
  const getJobByIdQuery = useQuery([REACT_QUERY_KEY_JOBS, jobId], () =>
    getJobById(jobId!)
  );
  return getJobByIdQuery;
};
