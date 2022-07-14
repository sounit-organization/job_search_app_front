import { Link } from "react-router-dom";
import { authActions } from "../../../services/redux/authSlice";
import { removeToken } from "../../../services/localStorage.adapter";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import NavItem from "../atoms/NavItem";
import classes from "./Header.module.css";

const Header = () => {
  const { isLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    removeToken();
  };

  return (
    <header className={classes["Header"]}>
      <div className={classes[`Header__nav-items`]}>
        <Link to="/" className={classes[`Header__logo-link`]}>
          <h1 className={classes[`Header__logo-text`]}>Job Search</h1>
        </Link>
        <NavItem title="Find jobs" to="/" />
        {isLogin && <NavItem title="Add Job" to="/jobs/new" />}
        {isLogin && <NavItem title="Add Skill" to="/skills/new" />}
      </div>
      <div className={classes["Header__auth-links"]}>
        {!isLogin && <NavItem title="Login" to="/login" />}
        {!isLogin && <NavItem title="SignUp" to="/signUp" />}
        {isLogin && (
          <p onClick={logoutHandler} className="cursor-pointer">
            Logout
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
