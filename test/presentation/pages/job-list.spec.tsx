import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../../mocks/server";
import JobList, { jobsUrl } from "../../../src/presentation/pages/job-list";

// FIXME: test fail because of react-query
// describe("initial rendering", () => {
//   describe("fetch job list", () => {
//     it("has 0 jobs", async () => {
//       // overwrite server response
//       server.use(
//         rest.get(jobsUrl, (req, res, ctx) => {
//           return res.once(ctx.json([]));
//         })
//       );

//       render(<JobList />, { wrapper: BrowserRouter });
//     });

//     it("has 2 jobs", async () => {
//       render(<JobList />, { wrapper: BrowserRouter });

//       const jobCardList = await screen.findAllByRole("heading", {
//         name: /test title/i,
//       });

//       expect(jobCardList).toHaveLength(2);
//     });
//   });

//   describe("job card has correct contents", () => {
//     it("has correct title", async () => {
//       render(<JobList />, { wrapper: BrowserRouter });

//       const jobCard = await screen.findByRole("heading", {
//         name: /test title1/i,
//       });

//       expect(jobCard).toHaveTextContent("test title1");
//     });

//     it("has correct city", async () => {
//       render(<JobList />, { wrapper: BrowserRouter });

//       const cityName = await screen.findByText(/test city1/i);

//       expect(cityName).toHaveTextContent("test city");
//     });

//     it("has correct payment", async () => {
//       render(<JobList />, { wrapper: BrowserRouter });

//       const payment = await screen.findByText("1.11");

//       expect(payment).toHaveTextContent("1.11");
//     });

//     it("has correct description", async () => {
//       render(<JobList />, { wrapper: BrowserRouter });

//       const description = await screen.findByText("test description1");

//       expect(description).toHaveTextContent("test description1");
//     });

//     it("has correct skills", async () => {
//       render(<JobList />, { wrapper: BrowserRouter });

//       const skill1 = await screen.findByText("React");
//       const skill2 = await screen.findByText("Node");

//       expect(skill1).toHaveTextContent("React");
//       expect(skill2).toHaveTextContent("Node");
//     });
//   });
// });
