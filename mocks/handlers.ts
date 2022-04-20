import { rest } from "msw";

export const handlers = [
  rest.post(process.env.REACT_APP_BACKEND_URL!, (req, res, ctx) => {
    const body = req.body;
    const { skill } = body as any;
    return res(ctx.json({ skill }));
  }),

  rest.get(`${process.env.REACT_APP_BACKEND_URL!}/jobs`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title: "test title",
          companyName: "test company name",
          city: "test city",
          payment: 2.22,
          description: "test description",
          skills: [],
        },
      ])
    );
  }),
];
