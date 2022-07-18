import LoadingSpinner from "./LoadingSpinner";
import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={classes["loadingPage"]}>
      <LoadingSpinner />
    </div>
  );
};

export default LoadingPage;
