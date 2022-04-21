import { IJob } from "../src/domain/Job";
import { ISkill } from "../src/domain/Skill";

export const skillsDataList: { skills: ISkill[] } = {
  skills: [
    { id: "s1", title: "react" },
    { id: "s2", title: "node" },
  ],
};

export const jobDataList: { jobs: IJob[] } = {
  jobs: [
    {
      id: "j1",
      title: "test title1",
      companyName: "test company name1",
      city: "test city1",
      payment: 1.11,
      description: "test description1",
      skills: [
        { id: "s1", title: "React" },
        { id: "s2", title: "Node" },
      ],
    },
    {
      id: "j2",
      title: "test title2",
      companyName: "test company name2",
      city: "test city2",
      payment: 2.22,
      description: "test description2",
      skills: [
        { id: "s3", title: "PHP" },
        { id: "s4", title: "Docker" },
      ],
    },
  ],
};
