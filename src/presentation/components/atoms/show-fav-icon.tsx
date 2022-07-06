import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import classes from "./show-fav-icon.module.css";

const ShowFavIcon = () => {
  const favoriteJobs = useAppSelector((state) => state.favorites.favoriteJobs);

  const getFavJobsCount = () => {
    return Object.keys(favoriteJobs).length;
  };

  return (
    <Link to="/favorite" className={classes[componentName]}>
      Favorite {getFavJobsCount()}
    </Link>
  );
};

const componentName = "ShowFavIcon";

export default ShowFavIcon;
