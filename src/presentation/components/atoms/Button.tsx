import { FC } from "react";
import classes from "./Button.module.css";

interface Props {
  className: string;
  title: string;
  onClick: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes[componentName]} ${props.className}`}
    >
      {props.title}
    </button>
  );
};

const componentName = "Button";

export default Button;
