import { useState } from "react";
import { TextField, Container, FormControl, Button } from "@mui/material";

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
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log("submitHandler");
    console.log({ firstName, lastName, email, password });
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
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="standard"
            value={email}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            variant="standard"
            value={password}
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
