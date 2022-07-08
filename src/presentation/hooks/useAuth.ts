import { useCallback, useEffect } from "react";
import { authActions } from "../../services/redux/authSlice";
import { getToken, getUserId } from "../../services/localStorage.adapter";
import { useAppDispatch } from "./reduxHooks";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const autoLogin = useCallback(
    (token: string, userId: string) => {
      // FIXME: change to login
      dispatch(authActions.signUp({ token, userId }));
    },
    [dispatch]
  );

  useEffect(() => {
    const token = getToken();
    const userId = getUserId();

    if (token && userId) {
      autoLogin(token, userId);
    }
  }, [autoLogin]);
};

export default useAuth;
