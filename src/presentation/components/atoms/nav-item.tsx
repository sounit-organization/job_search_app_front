import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { INavItem } from "../../../domain/nav-item";
import classes from "./nav-item.module.css";

interface IProps {
  item: INavItem;
}

const NavItem: FC<IProps> = (props) => {
  const location = useLocation();
  const match = location.pathname === props.item.to;
  return (
    <NavLink
      key={props.item.id}
      to={props.item.to}
      className={
        match
          ? `${classes[componentName]} ${classes[`${componentName}__active`]}`
          : classes[componentName]
      }
    >
      {props.item.title}
    </NavLink>
  );
};

const componentName = "NavItem";
export default NavItem;
