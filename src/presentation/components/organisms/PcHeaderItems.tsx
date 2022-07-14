import { FC } from "react";
import { Link } from "react-router-dom";
import AuthNavItems from "../molecules/AuthNavItems";
import NavItems from "../molecules/NavItems";
import classes from "./PcHeaderItems.module.css";

type Props = {};

const PcHeaderItems: FC<Props> = (props) => {
  return (
    <>
      <div className={classes[`PcHeaderItems__main-links`]}>
        <Link to="/" className={classes[`PcHeaderItems__logo-link`]}>
          <h1 className={classes[`PcHeaderItems__logo-text`]}>Job Search</h1>
        </Link>
        <div className={classes[`PcHeaderItems__nav-items`]}>
          <NavItems />
        </div>
      </div>
      <div className={classes["PcHeaderItems__auth-links"]}>
        <AuthNavItems />
      </div>
    </>
  );
};

export default PcHeaderItems;
