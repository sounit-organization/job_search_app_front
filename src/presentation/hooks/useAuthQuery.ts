import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { REACT_QUERY_KEY_LOGIN } from "../../constants/constants";
import { login, LoginData } from "../../services/authHttpClient.adapter";
import { saveToken, saveUserId } from "../../services/localStorage.adapter";
import { authActions } from "../../services/redux/authSlice";
import { useAppDispatch } from "./reduxHooks";
import useErrorHandler from "./useErrorHandler";

export const useLoginQuery = (loginData: LoginData) => {
  const dispatch = useAppDispatch();
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();

  const loginQuery = useQuery(REACT_QUERY_KEY_LOGIN, () => login(loginData), {
    enabled: false,
    onSuccess: (data) => {
      const { token, user } = data;
      const { _id: userId } = user;

      dispatch(authActions.login({ token, userId }));

      saveToken(token);
      saveUserId(userId);

      navigate("/");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return loginQuery;
};
