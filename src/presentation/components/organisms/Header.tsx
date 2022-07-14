import classes from "./Header.module.css";
import PcHeaderItems from "./PcHeaderItems";
import MobileHeaderItems from "./MobileHeaderItems";

const Header = () => {
  return (
    <header className={classes["Header"]}>
      <PcHeaderItems />
      <MobileHeaderItems />
    </header>
  );
};

export default Header;
