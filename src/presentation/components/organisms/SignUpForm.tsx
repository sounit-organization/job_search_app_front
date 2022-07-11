import { TextField, Container, FormControl, Button } from "@mui/material";
import { signUp } from "../../../services/authHttpClient.adapter";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { authActions } from "../../../services/redux/authSlice";
import { saveToken, saveUserId } from "../../../services/localStorage.adapter";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useErrorHandler from "../../hooks/useErrorHandler";

const initialValues = {
  firstName: "test first name",
  lastName: "test last name",
  email: "test@email",
  password: "testpassword",
};

const SignUpForm = () => {
  const { values, valueChangeHandler } = useForm(initialValues);
  const { firstName, lastName, email, password } = values;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleError } = useErrorHandler();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      const { token, user } = await signUp({
        firstName,
        lastName,
        email,
        password,
      });
      const { _id: userId } = user;

      dispatch(authActions.signUp({ token, userId }));

      saveToken(token);
      saveUserId(userId);

      navigate("/");
    } catch (error) {
      handleError(error);
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
