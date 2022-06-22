import { useSelector } from "react-redux";
import Card from "../components/atoms/card";
import { RootState } from "../../services/re-ducks/store";
import classes from "./favorite.module.css";

const Favorite = () => {
  const favoriteJobs = useSelector(
    (state: RootState) => state.favorite.favoriteJobs
  );

  console.log(favoriteJobs);

  return (
    <div className={classes.favorite__container}>
      {favoriteJobs.map((job) => (
        <Card className={classes.favorite__card}>
          <h2>{job.title}</h2>
        </Card>
      ))}
    </div>
  );
};

export default Favorite;
