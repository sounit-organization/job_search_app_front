import axios from "axios";
import { FC, useEffect, useState } from "react";
import JobCardList from "../components/molecules/JobList/JobCardList";
import { IJob } from "../../domain/Job";
import classes from "./JobList.module.css";
import JobSearchForm from "../components/organisms/JobSearchForm";

export const jobsUrl = `${process.env.REACT_APP_BACKEND_URL}/jobs`;

const formInitialValues = {
  title: "",
  city: "",
};

const JobList: FC = () => {
  const [jobList, setJobList] = useState<IJob[]>([]);

  const fetchJobList = async () => {
    try {
      const response = await axios(jobsUrl);
      const { jobs } = response.data;
      setJobList(jobs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobList();
  }, []);

  return (
    <div className={classes[componentName]}>
      <JobSearchForm initialValues={formInitialValues} />
      <JobCardList jobList={jobList} />
    </div>
  );
};

const componentName = "JobList";

export default JobList;
