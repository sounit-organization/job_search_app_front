import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import NavItem from "../atoms/NavItem";
import classes from "./PcHeaderItems.module.css";

type Props = {
  logoutHandler: React.MouseEventHandler<HTMLParagraphElement>;
};

const PcHeaderItems: FC<Props> = (props) => {
  const { isLogin } = useAppSelector((state) => state.auth);
  const { logoutHandler } = props;

  return (
    <>
      <div className={classes[`PcHeaderItems__main-links`]}>
        <Link to="/" className={classes[`PcHeaderItems__logo-link`]}>
          <h1 className={classes[`PcHeaderItems__logo-text`]}>Job Search</h1>
        </Link>
        <div className={classes[`PcHeaderItems__nav-items`]}>
          <NavItem title="Find jobs" to="/" />
          {isLogin && <NavItem title="Add Job" to="/jobs/new" />}
          {isLogin && <NavItem title="Add Skill" to="/skills/new" />}
        </div>
      </div>
      <div className={classes["PcHeaderItems__auth-links"]}>
        {!isLogin && <NavItem title="Login" to="/login" />}
        {!isLogin && <NavItem title="SignUp" to="/signUp" />}
        {isLogin && (
          <p onClick={logoutHandler} className="cursor-pointer">
            Logout
          </p>
        )}
      </div>
    </>
  );
};

export default PcHeaderItems;
