import { FC } from "react";
import JobCard from "./JobCard";
import { IJob } from "../../../../domain/Job";
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
      </ul>
    </>
  );
};

export default JobCardList;
