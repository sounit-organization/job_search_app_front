import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import NavItem from "../atoms/nav-item";
import classes from "./header.module.css";

const Header = () => {
  const { isLogin } = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <header className={classes[componentName]}>
      <Link to="/" className={classes[`${componentName}__logo-link`]}>
        <h1 className={classes[`${componentName}__logo-text`]}>Job Search</h1>
      </Link>
      <div className={classes[`${componentName}__nav-items`]}>
        <NavItem title="Find jobs" to="/" />
        <NavItem title="Add Job" to="/jobs/new" />
        <NavItem title="Add Skill" to="/skills/new" />
        {!isLogin && <NavItem title="Login" to="/login" />}
        {!isLogin && <NavItem title="SignUp" to="/signUp" />}
      </div>
      {/* FIXME: refactor to same style component */}
      {isLogin && (
        <p onClick={logoutHandler} className="cursor-pointer">
          Logout
        </p>
      )}
    </header>
  );
};

const componentName = "Header";

export default Header;
