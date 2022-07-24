import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  buttonText?: string;
};

const BackButton: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { buttonText = "Go Back" } = props;

  const goBackHandler = () => {
    navigate(-1);
  };

  return <Button onClick={goBackHandler}>{buttonText}</Button>;
};

export default BackButton;
