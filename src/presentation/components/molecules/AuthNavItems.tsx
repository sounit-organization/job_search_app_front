import { ListItemText } from "@mui/material";
import { FC } from "react";
import { removeToken } from "../../../services/localStorage.adapter";
import { authActions } from "../../../services/redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import NavItem from "../atoms/NavItem";

type Props = {};

const AuthNavItems: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    removeToken();
  };

  return (
    <>
      {!isLogin && (
        <ListItemText>
          <NavItem title="Login" to="/login" />
        </ListItemText>
      )}
      {!isLogin && (
        <ListItemText>
          <NavItem title="SignUp" to="/signUp" />
        </ListItemText>
      )}
      {isLogin && (
        <ListItemText>
          <p onClick={logoutHandler} className="mx-3 cursor-pointer">
            Logout
          </p>
        </ListItemText>
      )}
    </>
  );
};

export default AuthNavItems;
