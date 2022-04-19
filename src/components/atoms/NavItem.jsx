import { NavLink, useLocation } from "react-router-dom";
import classes from "./nav-item.module.css";

const NavItem = (props) => {
  const location = useLocation();
  const match = location.pathname === props.item.to;
  return (
    <NavLink
      key={props.item.id}
      to={props.item.to}
      className={` ${
        match
          ? classes[(componentName, componentName__active)]
          : classes[componentName]
      }`}
    >
      {props.item.title}
    </NavLink>
  );
};

const componentName = "NavItem";
const componentName__active = "NavItem__active";
export default NavItem;
