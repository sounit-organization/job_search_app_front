import { Button } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  jobId: string;
  loginUserId: string;
  jobUserId: string;
};

const JobDetailCardActions: FC<Props> = (props) => {
  const { jobId, loginUserId, jobUserId } = props;

  return (
    <div className="flex justify-center">
      {loginUserId === jobUserId && (
        <>
          <Button variant="outlined" sx={{ mr: 1 }}>
            <Link to={`/jobs/${jobId}/edit`}>EDIT</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default JobDetailCardActions;
