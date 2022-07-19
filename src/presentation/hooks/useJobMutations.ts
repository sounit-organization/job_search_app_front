import { IJob } from "./../../domain/Job";
import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY_JOBS } from "../../constants/constants";
import { createJob } from "../../services/jobHttpClient.adapter";

export const useJobMutations = () => {
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

  //FIXME: use this logic later
  //   const updateJobMutation = useMutation<
  //     IJob,
  //     Error,
  //     { updatedJob: IJob; token: string; JobId: string }
  //   >(updateJob, {
  //     onSuccess: (data) => {
  //       queryClient.setQueryData([REACT_QUERY_KEY_JOBS, data._id], data);
  //       queryClient.invalidateQueries(REACT_QUERY_KEY_JOBS);

  //       navigate("/Jobs/new");
  //     },
  //   });

  return {
    createJobMutation,
    // updateJobMutation,
  };
};
