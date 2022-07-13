import classes from "./JobCard.module.css";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import { IJob } from "../../../domain/Job";
import { useAppSelector } from "../../hooks/reduxHooks";
import Card from "../atoms/Card";
import SkillTagList from "./SkillTagList";
import JobCardActions from "./JobCardActions";

interface Props {
  className: string;
  skills?: ISkill[];
  job: IJob;
}

const JobCard: FC<Props> = (props) => {
  const { job, className } = props;
  const { userId: jobUserId } = job;
  const { userId: loginUserId } = useAppSelector((state) => state.auth);

  return (
    <div className={classes["JobCard__link"]}>
      <Card className={`${classes[componentName]} ${className}`}>
        <h2 className={classes["JobCard__title"]}>{job.title}</h2>
        <p className={classes["JobCard__title"]}>{job.city}</p>
        <p className={classes["JobCard__title"]}>{job.payment}</p>
        <SkillTagList skills={job.skills} />
        <JobCardActions
          jobId={job._id}
          jobUserId={jobUserId}
          loginUserId={loginUserId}
        />
      </Card>
    </div>
  );
};

const componentName = "JobCard";

export default JobCard;
