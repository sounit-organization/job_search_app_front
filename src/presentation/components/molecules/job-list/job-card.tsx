import Card from "../../atoms/card";
import classes from "./job-card.module.css";
import { Link } from "react-router-dom";
import { ISkill } from "../../../../domain/Skill";
import { FC } from "react";
import { IJob } from "../../../../domain/Job";
import { Button } from "@mui/material";
import { useAppSelector } from "../../../hooks/reduxHooks";

interface Props {
  className: string;
  skills?: ISkill[];
  job: IJob;
}

const JobCard: FC<Props> = (props) => {
  const { job, className } = props;
  const { userId: jobUserId } = job;
  const { userId: loginUserId } = useAppSelector((state) => state.auth);

  const deleteJobHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("delete job handler");
  };

  return (
    <div className={classes["JobCard__link"]}>
      <Card className={`${classes[componentName]} ${className}`}>
        <h2 className={classes["JobCard__title"]}>{job.title}</h2>
        <p className={classes["JobCard__title"]}>{job.city}</p>
        <p className={classes["JobCard__title"]}>{job.payment}</p>
        <p className={classes["JobCard__title"]}>{job.description}</p>
        <div>
          {job.skills &&
            job.skills.map((skill) => <div key={skill._id}>{skill.title}</div>)}
        </div>
        <Button variant="outlined">
          <Link to={`/jobs/detail/${job._id}`}>Detail</Link>
        </Button>
        {jobUserId === loginUserId && (
          <Button variant="outlined" color="error" onClick={deleteJobHandler}>
            Delete
          </Button>
        )}
      </Card>
    </div>
  );
};

const componentName = "JobCard";

export default JobCard;
