import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter } from "react-router-dom";
import JobList, { jobsUrl } from "../../../src/pages/job-list";

// const jobsResponse = rest.get(jobsUrl, (req, res, ctx) => {
//   return res(
//     ctx.json({
//       jobs: [
//         {
//           title: "test title1",
//           companyName: "test company name",
//           city: "test city",
//           payment: 2.22,
//           description: "test description",
//           skills: [],
//         },
//         {
//           title: "test title2",
//           companyName: "test company name",
//           city: "test city",
//           payment: 2.22,
//           description: "test description",
//           skills: [],
//         },
//       ],
//     })
//   );
// });

// const handlers = [jobsResponse];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

it("shows job list items", async () => {
  render(<JobList />, { wrapper: BrowserRouter });

  const jobCard = await screen.findByRole("heading", { name: /test title1/i });
});
