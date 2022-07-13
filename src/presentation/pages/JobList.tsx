import { FC, useCallback, useEffect } from "react";
import JobCardList from "../components/molecules/JobList/JobCardList";
import classes from "./JobList.module.css";
import JobSearchForm from "../components/organisms/JobSearchForm";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { jobActions } from "../../services/redux/jobSlice";
import { getJobs } from "../../services/jobHttpClient.adapter";
import { useGetJobsQuery } from "../hooks/useJobsQuery";
import useErrorHandler from "../hooks/useErrorHandler";

export const jobsUrl = `${process.env.REACT_APP_BACKEND_URL}/jobs`;

const formInitialValues = {
  title: "",
  city: "",
};

const JobList: FC = () => {
  const dispatch = useAppDispatch();
  const getJobsQuery = useGetJobsQuery();
  const { handleError } = useErrorHandler();

  // updated both from JobList and SearchJobForm
  const { jobs } = useAppSelector((state) => state.jobs);

  const fetchJobList = useCallback(async () => {
    try {
      const jobs = await getJobs();
      dispatch(jobActions.setJobs(jobs));
    } catch (err) {
      handleError(err);
    }
  }, [dispatch, handleError]);

  useEffect(() => {
    fetchJobList();
  }, [fetchJobList]);

  if (getJobsQuery.isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className={classes[componentName]}>
      <JobSearchForm initialValues={formInitialValues} />
      <JobCardList jobList={jobs} />
    </div>
  );
};

const componentName = "JobList";

export default JobList;
