import { useState } from "react";
import { TextField, Container, FormControl, Button } from "@mui/material";
import { signUp } from "../../../services/authHttpClient.adapter";

const SignUpForm = () => {
  const initialValues = {
    firstName: "test first name",
    lastName: "test last name",
    email: "test email",
    password: "test password",
  };

  const [values, setValues] = useState(initialValues);
  const { firstName, lastName, email, password } = values;

  const valueChangeHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    console.log("submitHandler");
    console.log({ firstName, lastName, email, password });

    try {
      const result = await signUp({ firstName, lastName, email, password });
      console.log("submit result", result);
    } catch (error) {
      // FIXME: add error modal
      console.log(error);
    }
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            variant="standard"
            value={firstName}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            variant="standard"
            value={lastName}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
