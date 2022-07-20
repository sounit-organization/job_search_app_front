import { Button } from "@mui/material";
import React, { FC } from "react";

type Props = {
  loginUserId: string;
  jobUserId: string;
};

const JobDetailCardActions: FC<Props> = (props) => {
  const { loginUserId, jobUserId } = props;

  return (
    <div className="flex justify-center">
      {loginUserId === jobUserId && (
        <>
          <Button variant="outlined" sx={{ mr: 1 }}>
            EDIT
          </Button>
        </>
      )}
    </div>
  );
};

export default JobDetailCardActions;
