import { FC } from "react";
import classes from "./Card.module.css";

interface Props {
  className: string;
  // FIXME: some comment here
  children: any;
}

const Card: FC<Props> = (props) => {
  return (
    <div className={`${classes[componentName]} ${props.className}`}>
      {props.children}
    </div>
  );
};

const componentName = "Card";

export default Card;
