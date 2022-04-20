import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import JobCardList from "../components/molecules/job-list/job-card-list";
import classes from "./job-list.module.css";

const JobList = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/jobs`
        );

        const responseData = await response.json();
        console.log(responseData);
        setJobList(responseData.jobs);
      } catch (err) {
        console.log(err);
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
