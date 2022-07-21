import classes from "./JobCard.module.css";
import { FC } from "react";
import { ISkill } from "../../../domain/Skill";
import { IJob } from "../../../domain/Job";
import { useAppSelector } from "../../hooks/reduxHooks";
import Card from "../atoms/Card";
import SkillTagList from "./SkillTagList";
import JobCardActions from "./JobCardActions";
import JobLabeledText from "../molecules/JobLabeledText";

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
    <Card className={`${classes["JobCard"]} ${className}`}>
      <div className={classes["JobCard__container"]}>
        <div>
          <JobLabeledText labelText="Title" valueText={job.title} />
          <JobLabeledText labelText="City" valueText={job.city} />
          <JobLabeledText
            labelText="Payment"
            valueText={job.payment ? String(job.payment) : ""}
          />
          <SkillTagList skills={job.skills as ISkill[]} />
        </div>
        <JobCardActions
          jobId={job._id!}
          jobUserId={jobUserId!}
          loginUserId={loginUserId}
        />
      </div>
    </Card>
  );
};

export default JobCard;
