import { screen } from "@testing-library/react";
import App from "../../../src/App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithWrapper } from "../../test-utils/testing-library-utils";

it("fake test", () => {
  expect("").toBe("");
});

describe("header navigate user correctly", () => {
  // it("clicks logo and navigate to top page", async () => {
  //   renderWithWrapper(<App />);
  //   const headerLogo = screen.getByRole("heading", { name: /job search/i });
  //   const addSkillLink = screen.getByRole("link", { name: /add skill/i });
  //   userEvent.click(addSkillLink);
  //   userEvent.click(headerLogo);
  //   const findJobsButton = screen.getByRole("button", { name: /find jobs/i });
  //   expect(findJobsButton).toBeInTheDocument();
  // });
  // it("clicks add skill and navigate to add skill page", async () => {
  //   renderWithWrapper(<App />);
  //   const addSkillLink = screen.getByRole("link", { name: /add skill/i });
  //   userEvent.click(addSkillLink);
  //   const addSkillButton = screen.getByRole("button", { name: /add skill/i });
  //   expect(addSkillButton).toBeInTheDocument();
  // });
});
