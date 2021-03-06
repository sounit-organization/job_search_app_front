import { TextField, Container, FormControl, Button } from "@mui/material";
import useErrorHandler from "../../hooks/useErrorHandler";
import { useAuthMutations } from "../../hooks/useAuthMutations";
import useForm from "../../hooks/useForm";
import LoadingPage from "./LoadingPage";

const initialValues = {
  firstName: "test first name",
  lastName: "test last name",
  email: "test@email.com",
  password: "password",
};

const SignUpForm = () => {
  const { values, valueChangeHandler } = useForm(initialValues);
  const { firstName, lastName, email, password } = values;
  const { handleError } = useErrorHandler();
  const { signUpMutation } = useAuthMutations();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    signUpMutation.mutate({
      firstName,
      lastName,
      email,
      password,
    });
  };

  if (signUpMutation.isLoading) {
    return <LoadingPage />;
  }

  // this can be written in onError in mutation definition
  // leave this as it is as a sample
  if (signUpMutation.isError) {
    handleError(signUpMutation.error);
    signUpMutation.reset();
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
            value={password}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <div className="flex justify-center">
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUpForm;
