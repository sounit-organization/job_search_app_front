import { IconButton } from "@mui/material";
import React, { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./MobileHeaderItems.module.css";

type Props = {
  logoutHandler: React.MouseEventHandler<HTMLParagraphElement>;
};

const MobileHeaderItems: FC<Props> = (props) => {
  const { logoutHandler } = props;

  return (
    <div className={classes["MobileHeaderItems"]}>
      <IconButton className={classes["MobileHeaderItems__menu-button"]}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default MobileHeaderItems;
