import { IJob } from "./../../domain/Job";
import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY_JOBS } from "../../constants/constants";
import { createJob, updateJob } from "../../services/jobHttpClient.adapter";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./reduxHooks";
import { errorActions } from "../../services/redux/errorSlice";

export const useJobMutations = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // https://qiita.com/suzuki0430/items/1812e600797bba661cef
  const createJobMutation = useMutation<
    IJob,
    Error,
    { newJob: IJob; token: string }
  >(createJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(REACT_QUERY_KEY_JOBS);
    },
  });

  const updateJobMutation = useMutation<
    IJob,
    Error,
    { jobFormData: IJob; token: string; jobId: string }
  >(updateJob, {
    onSuccess: (data) => {
      queryClient.setQueryData([REACT_QUERY_KEY_JOBS, data._id], data);
      queryClient.invalidateQueries(REACT_QUERY_KEY_JOBS);

      navigate(-1);
    },
    onError: () => {
      dispatch(errorActions.setError(`Failed to update job`));
    },
  });

  return {
    createJobMutation,
    updateJobMutation,
  };
};
