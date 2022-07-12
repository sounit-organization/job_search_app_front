import { FC } from "react";
import Button from "./Button";
import classes from "./CreateButton.module.css";

interface Props {
  title: string;
  onClick?: () => void;
  className: any;
}

const CreateButton: FC<Props> = (props) => {
  const { title, onClick, className } = props;
  return (
    <Button
      title={title}
      onClick={onClick ? onClick : () => {}}
      className={`${classes[componentName]} ${className}`}
    />
  );
};

const componentName = "CreateButton";

export default CreateButton;
