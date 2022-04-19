import { FC } from "react";
import NavItem from "../atoms/NavItem";
import { INavItem } from "./Header";
import ShowFavIcon from "../atoms/show-fav-icon";

interface Props {
  items: INavItem[];
}

const NavItems: FC<Props> = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}

      {/* first fix redux then uncomment this */}
      {/* <ShowFavIcon /> */}
    </>
  );
};

export default NavItems;
