import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import JobCardList from "../components/molecules/job-list/job-card-list";
import classes from "./job-list.module.css";

export const jobsUrl = `${process.env.REACT_APP_BACKEND_URL}/jobs`;

const JobList: FC = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const response = await axios(jobsUrl);

        const responseData = response.data;
        setJobList(responseData.jobs);
      } catch (err) {
        // FIXME: to avoid test error
        // console.log(err);
      }
    };

    fetchJobList();
  }, []);

  return (
    <div className={classes[componentName]}>
      <JobCardList jobList={jobList} />
      <Outlet />
    </div>
  );
};

const componentName = "JobList";

export default JobList;
