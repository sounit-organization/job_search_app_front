import { Button, Container, FormControl, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";

const formInitialValues: FormValues = {
  email: "test@email.com",
  password: "password",
};

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { values, valueChangeHandler } = useForm(formInitialValues);
  const { email, password } = values as FormValues;

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={valueChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
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

export default LoginForm;
