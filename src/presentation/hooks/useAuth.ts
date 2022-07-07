import { useCallback, useEffect } from "react";
import { authActions } from "../../services/redux/authSlice";
import { getToken } from "../../services/token.adapter";
import { useAppDispatch } from "./reduxHooks";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const autoLogin = useCallback(
    (token: string) => {
      // FIXME: change to login
      dispatch(authActions.signUp(token));
    },
    [dispatch]
  );

  useEffect(() => {
    const token = getToken();
    if (token) {
      autoLogin(token);
    }
  }, [autoLogin]);
};

export default useAuth;
