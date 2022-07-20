import React, { FC } from "react";
import { IJob } from "../../../domain/Job";
import { ISkill } from "../../../domain/Skill";
import SkillTagList from "./SkillTagList";

type Props = { job: IJob };

const JobDetailCard: FC<Props> = (props) => {
  const { job } = props;
  const {
    title,
    city,
    companyName,
    description,
    payment,
    skills,
    _id,
    userId,
  } = job;

  return (
    <div>
      <p>{title}</p>
      <p>{city}</p>
      <p>{companyName}</p>
      <p>{description}</p>
      <p>{payment}</p>
      <SkillTagList skills={skills as ISkill[]} />
    </div>
  );
};

export default JobDetailCard;
