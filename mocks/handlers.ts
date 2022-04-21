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
            id: "1",
            title: "test title1",
            companyName: "test company name",
            city: "test city",
            payment: 2.22,
            description: "test description",
            skills: [],
          },
          {
            id: "2",
            title: "test title2",
            companyName: "test company name",
            city: "test city",
            payment: 2.22,
            description: "test description",
            skills: [],
          },
        ],
      })
    );
  }),
];
