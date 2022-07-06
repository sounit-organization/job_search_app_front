import Card from "../components/atoms/card";
import classes from "./favorite.module.css";
import { useAppSelector } from "../hooks/reduxHooks";

const Favorite = () => {
  const favoriteJobs = useAppSelector((state) => state.favorites.favoriteJobs);

  console.log(favoriteJobs);

  return (
    <div className={classes.favorite__container}>
      {favoriteJobs.map((job) => (
        <Card key={job._id} className={classes.favorite__card}>
          <h2>{job.title}</h2>
        </Card>
      ))}
    </div>
  );
};

export default Favorite;
