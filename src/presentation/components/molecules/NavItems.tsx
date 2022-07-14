import { ListItemText } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import NavItem from "../atoms/NavItem";

type Props = {};

const NavItems: FC<Props> = (props) => {
  const { isLogin } = useAppSelector((state) => state.auth);

  return (
    <>
      <ListItemText>
        <NavItem title="Find jobs" to="/" />
      </ListItemText>
      {isLogin && (
        <ListItemText>
          <NavItem title="Add Job" to="/jobs/new" />
        </ListItemText>
      )}
      {isLogin && (
        <ListItemText>
          {" "}
          <NavItem title="Add Skill" to="/skills/new" />
        </ListItemText>
      )}
    </>
  );
};

export default NavItems;
