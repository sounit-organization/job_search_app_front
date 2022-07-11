import Card from "../../atoms/Card";
import classes from "./JobCard.module.css";
import { Link } from "react-router-dom";
import { ISkill } from "../../../../domain/Skill";
import { FC } from "react";
import { IJob } from "../../../../domain/Job";

interface Props {
  className: string;
  skills?: ISkill[];
  job: IJob;
}

const JobCard: FC<Props> = (props) => {
  const { job, className } = props;

  return (
    <Link to={`/jobs/detail/${job._id}`} className={classes["JobCard__link"]}>
      <Card className={`${classes[componentName]} ${className}`}>
        <h2 className={classes["JobCard__title"]}>{job.title}</h2>
        <p className={classes["JobCard__title"]}>{job.city}</p>
        <p className={classes["JobCard__title"]}>{job.payment}</p>
        <p className={classes["JobCard__title"]}>{job.description}</p>
        <div>
          {job.skills &&
            job.skills.map((skill) => <div key={skill._id}>{skill.title}</div>)}
        </div>
      </Card>
    </Link>
  );
};

const componentName = "JobCard";

export default JobCard;
