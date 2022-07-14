import { FC } from "react";
import { Alert, AlertTitle, Modal as MuiModal } from "@mui/material";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { errorActions } from "../../../services/redux/errorSlice";

type Props = {
  message: string | null;
  isOpen: boolean;
};

const ErrorModal: FC<Props> = (props) => {
  const { message, isOpen } = props;
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    dispatch(errorActions.setError(null));
  };

  return (
    <MuiModal open={isOpen} onClose={closeModalHandler}>
      <Alert severity="error" className="fixed w-1/2 left-1/4 top-1/3 p-5">
        <AlertTitle>Error!</AlertTitle>
        {message}
      </Alert>
    </MuiModal>
  );
};

export default ErrorModal;
