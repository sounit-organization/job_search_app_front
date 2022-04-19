import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./show-fav-icon.module.css";

const ShowFavIcon = () => {
  const favoriteJobs = useSelector((state) => state.user.favoriteJobs);

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
