import { FC } from "react";
import classes from "./input.module.css";

interface Props {
  name?: string;
  id?: string;
  placeholder: string;
  className: any;
  value: string;
  onChange: any;
}

const Input: FC<Props> = (props) => {
  return (
    <div>
      <label>{props.name}</label>
      <input
        id={props.id}
        placeholder={props.placeholder || "Search"}
        className={`${classes[componentName]} ${props.className}`}
        value={props.value}
        onChange={props.onChange}
        type="text"
      />
    </div>
  );
};

const componentName = "Input";

export default Input;
