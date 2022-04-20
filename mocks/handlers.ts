import { rest } from "msw";

export const handlers = [
  rest.post(process.env.REACT_APP_BACKEND_URL!, (req, res, ctx) => {
    const body = req.body;
    const { skill } = body as any;
    return res(ctx.json({ skill }));
  }),
];
