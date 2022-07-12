import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/authHttpClient.adapter";
import { saveToken, saveUserId } from "../../services/localStorage.adapter";
import { authActions } from "../../services/redux/authSlice";
import { useAppDispatch } from "./reduxHooks";

export const useAuthMutations = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signUpMutation = useMutation(signUp, {
    onSuccess: (data) => {
      const { token, user } = data;
      const { _id: userId } = user;

      dispatch(authActions.signUp({ token, userId }));

      saveToken(token);
      saveUserId(userId);

      navigate("/");
    },
  });

  return {
    signUpMutation,
  };
};
