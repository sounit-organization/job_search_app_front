import axios from "axios";
import { FC, useCallback, useEffect } from "react";
import JobCardList from "../components/molecules/JobList/JobCardList";
import classes from "./JobList.module.css";
import JobSearchForm from "../components/organisms/JobSearchForm";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { jobActions } from "../../services/redux/jobSlice";

export const jobsUrl = `${process.env.REACT_APP_BACKEND_URL}/jobs`;

const formInitialValues = {
  title: "",
  city: "",
};

const JobList: FC = () => {
  const dispatch = useAppDispatch();
  const { jobs } = useAppSelector((state) => state.jobs);

  const fetchJobList = useCallback(async () => {
    try {
      const response = await axios(jobsUrl);
      const { jobs } = response.data;

      dispatch(jobActions.setJobs(jobs));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchJobList();
  }, [fetchJobList]);

  return (
    <div className={classes[componentName]}>
      <JobSearchForm initialValues={formInitialValues} />
      <JobCardList jobList={jobs} />
    </div>
  );
};

const componentName = "JobList";

export default JobList;
