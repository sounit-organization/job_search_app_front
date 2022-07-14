import { authActions } from "../../../services/redux/authSlice";
import { removeToken } from "../../../services/localStorage.adapter";
import { useAppDispatch } from "../../hooks/reduxHooks";
import classes from "./Header.module.css";
import PcHeaderItems from "./PcHeaderItems";
import MobileHeaderItems from "./MobileHeaderItems";

const Header = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    removeToken();
  };

  return (
    <header className={classes["Header"]}>
      <PcHeaderItems logoutHandler={logoutHandler} />
      <MobileHeaderItems logoutHandler={logoutHandler} />
    </header>
  );
};

export default Header;
