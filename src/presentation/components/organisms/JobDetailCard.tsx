import { Paper } from "@mui/material";
import { FC } from "react";
import { IJob } from "../../../domain/Job";
import { ISkill } from "../../../domain/Skill";
import { useAppSelector } from "../../hooks/reduxHooks";
import JobLabeledText from "../molecules/JobLabeledText";
import JobDetailCardActions from "./JobDetailCardActions";
import SkillTagList from "./SkillTagList";

type Props = { job: IJob };

const JobDetailCard: FC<Props> = (props) => {
  const { userId: loginUserId } = useAppSelector((state) => state.auth);

  const { job } = props;
  const {
    title,
    city,
    companyName,
    description,
    payment,
    skills,
    userId: jobUserId,
  } = job;

  return (
    <Paper className="m-5 p-5" variant="outlined">
      <JobLabeledText labelText="Title" valueText={title} />
      <JobLabeledText labelText="City" valueText={city} />
      <JobLabeledText labelText="Company Name" valueText={companyName} />
      <JobLabeledText labelText="Description" valueText={description} />
      <JobLabeledText
        labelText="Payment"
        valueText={payment ? String(payment) : ""}
      />
      <SkillTagList skills={skills as ISkill[]} />
      <JobDetailCardActions
        loginUserId={loginUserId as string}
        jobUserId={jobUserId as string}
      />
    </Paper>
  );
};

export default JobDetailCard;
