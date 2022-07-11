import { errorActions } from "../../services/redux/errorSlice";
import { useAppDispatch } from "./reduxHooks";

const useErrorHandler = () => {
  const dispatch = useAppDispatch();

  const handleError = (error: unknown) => {
    // axios error
    const axiosResponse = (error as any).response;
    if (axiosResponse && axiosResponse.data) {
      return dispatch(errorActions.setError(axiosResponse.data.error));
    }

    dispatch(errorActions.setError(String(error)));
  };

  return { handleError };
};

export default useErrorHandler;
