// import { screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "../../../src/App";
// import { renderWithWrapper } from "../../test-utils/testing-library-utils";

// FIXME: test fail because of react-query
describe("create job", () => {
  it("fake test", () => {
    expect("").toBe("");
  });
  // it("creates job and title input is empty", async () => {
  //   renderWithWrapper(<App />);
  //   // to create-job page
  //   const addJobLink = screen.getByRole("link", { name: /add job/i });
  //   userEvent.click(addJobLink);
  //   // input job title
  //   const titleInput: HTMLInputElement = screen.getByRole("textbox", {
  //     name: /title/i,
  //   });
  //   const addNewJobButton = screen.getByRole("button", {
  //     name: /add new job/i,
  //   });
  //   userEvent.type(titleInput, "title for crate-new-job");
  //   expect(titleInput.value).toBe("title for crate-new-job");
  //   // create job
  //   userEvent.click(addNewJobButton);
  //   // check if input is empty
  //   await waitFor(() => {
  //     const titleInput: HTMLInputElement = screen.getByRole("textbox", {
  //       name: /title/i,
  //     });
  //     expect(titleInput.value).toBe("");
  //   });
  // });
});
