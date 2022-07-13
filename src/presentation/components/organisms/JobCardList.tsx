import { FC } from "react";
import { IJob } from "../../../domain/Job";
import JobCard from "./JobCard";
import classes from "./JobCardList.module.css";

const componentName = "JobCardList";

interface Props {
  jobList: IJob[];
}

const JobCardList: FC<Props> = (props) => {
  const { jobList } = props;

  return (
    <>
      <ul className={classes[`${componentName}__list`]}>
        {jobList.map((job: IJob) => (
          <JobCard
            key={job._id}
            job={job}
            className={classes[`${componentName}__card`]}
          />
        ))}
        {((jobList && jobList.length === 0) || !jobList) && (
          <div>No Job Found!</div>
        )}
      </ul>
    </>
  );
};

export default JobCardList;
