import { Box, Divider, Drawer, IconButton, List } from "@mui/material";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./MobileHeaderItems.module.css";
import NavItems from "../molecules/NavItems";
import AuthNavItems from "../molecules/AuthNavItems";

type Props = {};

const MobileHeaderItems: FC<Props> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={classes["MobileHeaderItems"]}>
      <IconButton
        className={classes["MobileHeaderItems__menu-button"]}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className="w-48" onClick={() => setIsDrawerOpen(false)}>
          <List>
            <NavItems />
          </List>
          <Divider />
          <List>
            <AuthNavItems />
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileHeaderItems;
