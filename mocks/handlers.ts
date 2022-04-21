import { rest } from "msw";
import { createSkillUrl } from "../src/pages/create-skill";
import { jobsUrl } from "../src/pages/job-list";

export const handlers = [
  rest.post(createSkillUrl, (req, res, ctx) => {
    const body = req.body;
    const { skill } = body as any;
    return res(ctx.json({ skill }));
  }),

  rest.get(jobsUrl, (req, res, ctx) => {
    return res(
      ctx.json({
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
      })
    );
  }),
];
