import { FC } from "react";
import { Box, Modal as MuiMOdal, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { errorActions } from "../../../services/redux/errorSlice";

type Props = {
  message: string | null;
  isOpen: boolean;
};

const Modal: FC<Props> = (props) => {
  const { message, isOpen } = props;
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    dispatch(errorActions.setError(null));
  };

  return (
    <MuiMOdal open={isOpen} onClose={closeModalHandler}>
      <Box className="bg-white fixed w-1/2 left-1/4 top-1/3 p-5">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {message}
        </Typography>
      </Box>
    </MuiMOdal>
  );
};

export default Modal;
