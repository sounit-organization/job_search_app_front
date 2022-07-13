import { AxiosError } from "axios";
import { useCallback } from "react";
import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch } from "./reduxHooks";

const useErrorHandler = () => {
  const dispatch = useAppDispatch();

  const handleError = useCallback(
    (error: unknown) => {
      // axios error
      const axiosResponse = (error as AxiosError).response;
      if (axiosResponse && axiosResponse.data) {
        return dispatch(errorActions.setError(axiosResponse.data.error));
      }

      dispatch(errorActions.setError(String(error)));
    },
    [dispatch]
  );

  return { handleError };
};

export default useErrorHandler;
