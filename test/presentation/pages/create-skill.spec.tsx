import { getByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import CreateSkill from "../../../src/pages/create-skill";

it("create test", async () => {
  // FIXME: to App
  render(<CreateSkill />, { wrapper: Router });

  // const skillPageLink = await screen.findByRole("link", { name: /add skill/i });
  // userEvent.click(skillPageLink);

  // skill page
  const skillNameInput: HTMLInputElement = screen.getByRole("textbox");
  const createButton = screen.getByRole("button", { name: "Add Skill" });

  userEvent.type(skillNameInput, "test skill name");
  expect(skillNameInput.value).toBe("test skill name");

  userEvent.click(createButton);

  await waitFor(() => {
    const skillNameInput: HTMLInputElement = screen.getByRole("textbox");
    expect(skillNameInput.value).toBe("");
  });
});
