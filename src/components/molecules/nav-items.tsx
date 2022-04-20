import { FC } from "react";
import { INavItem } from "../../domain/nav-item";
import NavItem from "../atoms/nav-item";
// import ShowFavIcon from "../atoms/show-fav-icon";

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
