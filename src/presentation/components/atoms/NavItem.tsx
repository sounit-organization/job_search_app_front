import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./NavItem.module.css";

interface IProps {
  title: string;
  to: string;
}

const NavItem: FC<IProps> = (props) => {
  const { title, to } = props;
  const location = useLocation();
  const match = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={
        match
          ? `${classes[componentName]} ${classes[`${componentName}__active`]}`
          : classes[componentName]
      }
    >
      {title}
    </NavLink>
  );
};

const componentName = "NavItem";
export default NavItem;
