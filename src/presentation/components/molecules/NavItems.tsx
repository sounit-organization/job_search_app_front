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
        <NavItem title="Search Jobs" to="/jobs/search" />
      </ListItemText>
      <ListItemText>
        <NavItem title="Statistics" to="/statistics" />
      </ListItemText>
      {isLogin && (
        <ListItemText>
          <NavItem title="Add Job" to="/jobs/new" />
        </ListItemText>
      )}
      {isLogin && (
        <ListItemText>
          <NavItem title="Add Skill" to="/skills/new" />
        </ListItemText>
      )}
    </>
  );
};

export default NavItems;
