import { FC } from "react";
import { BeatLoader } from "react-spinners";

type Props = {
  className?: string;
};

const LoadingSpinner: FC<Props> = (props) => {
  const { className } = props;

  return <BeatLoader className={className} color="#1976d2" />;
};

export default LoadingSpinner;
