import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../../../src/App";

describe("create job", () => {
  it("creates job and title input is empty", async () => {
    render(<App />, { wrapper: BrowserRouter });

    // to create-job page
    const addJobLink = screen.getByRole("link", { name: /add job/i });
    userEvent.click(addJobLink);

    // input job title
    const titleInput: HTMLInputElement = screen.getByRole("textbox", {
      name: /title/i,
    });
    const addNewJobButton = screen.getByRole("button", {
      name: /add new job/i,
    });
    userEvent.type(titleInput, "title for crate-new-job");
    expect(titleInput.value).toBe("title for crate-new-job");

    // create job
    userEvent.click(addNewJobButton);

    // check if input is empty
    await waitFor(() => {
      const titleInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /title/i,
      });
      expect(titleInput.value).toBe("");
    });
  });
});
