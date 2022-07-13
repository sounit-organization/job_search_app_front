import { FC } from "react";
import classes from "./Input.module.css";

interface Props {
  id?: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: any;
  className?: string;
  wrapperClassName?: string;
}

const Input: FC<Props> = (props) => {
  const {
    name,
    onChange,
    placeholder,
    value,
    className,
    id,
    wrapperClassName,
  } = props;

  return (
    <div className={wrapperClassName}>
      <label htmlFor={name}>{name}</label>
      <input
        name={name || ""}
        id={id}
        placeholder={placeholder || "Search"}
        className={`${classes[componentName]} ${className}`}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

const componentName = "Input";

export default Input;
