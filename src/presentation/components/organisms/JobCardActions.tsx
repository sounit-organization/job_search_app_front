import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./JobCardActions.module.css";

type Props = {
  jobId: string;
  jobUserId: string;
  loginUserId: string | null;
};

const JobCardActions: FC<Props> = (props) => {
  const { jobId, jobUserId, loginUserId } = props;

  const deleteJobHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("delete job handler");
  };

  return (
    <div className={classes["JobCardActions"]}>
      <Button variant="outlined">
        <Link to={`/jobs/detail/${jobId}`}>Detail</Link>
      </Button>
      {jobUserId === loginUserId && (
        <Button variant="outlined" color="error" onClick={deleteJobHandler}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default JobCardActions;
