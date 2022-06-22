import { rest } from "msw";
import { createJobUrl, fetchSkillsUrl } from "../src/constants/urls";
import { createSkillUrl } from "../src/presentation/pages/create-skill";
import { jobsUrl } from "../src/presentation/pages/job-list";
import { jobDataList, skillsDataList } from "./data";

export const handlers = [
  rest.post(createSkillUrl, (req, res, ctx) => {
    const body = req.body;
    const { skill } = body as any;
    return res(ctx.json({ skill }));
  }),

  rest.get(fetchSkillsUrl, (req, res, ctx) => {
    return res(ctx.json(skillsDataList));
  }),

  rest.post(createJobUrl, (req, res, ctx) => {
    const { title } = req.body as any;
    return res(ctx.status(200), ctx.json({ title }));
  }),

  rest.get(jobsUrl, (req, res, ctx) => {
    return res(ctx.json(jobDataList));
  }),
];
