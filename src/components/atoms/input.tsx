import { FC } from "react";
import classes from "./input.module.css";

interface Props {
  id?: string;
  name?: String;
  placeholder: string;
  value: string;
  onChange: any;
  className: string;
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
