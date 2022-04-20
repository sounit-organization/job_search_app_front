import { Link } from "react-router-dom";
import { INavItem } from "../../domain/nav-item";
import NavItems from "../molecules/nav-items";
import classes from "./header.module.css";

const Header = () => {
  const navItems: INavItem[] = [
    { id: "n1", title: "Find jobs", to: "/" },
    { id: "n2", title: "Add Job", to: "/jobs/new" },
    { id: "n3", title: "Add Skill", to: "/skills/new" },
    { id: "n4", title: "Favorites", to: "/skills/favorite" },
  ];

  return (
    <header className={classes[componentName]}>
      <Link to="/" className={classes[`${componentName}__logo-link`]}>
        <h1 className={classes[`${componentName}__logo-text`]}>Job Search</h1>
      </Link>
      <div className={classes[`${componentName}__nav-items`]}>
        <NavItems items={navItems} />
      </div>
    </header>
  );
};

const componentName = "Header";

export default Header;
