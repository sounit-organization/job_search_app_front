import { FC } from "react";
import classes from "./JobLabeledText.module.css";

type Props = {
  valueText: string;
  labelText: string;
};

const JobLabeledText: FC<Props> = (props) => {
  const { labelText, valueText } = props;

  return (
    <p className={classes["JobLabeledText"]}>
      <span className={classes["JobLabeledText__label"]}>{labelText}</span>{" "}
      {valueText}
    </p>
  );
};

export default JobLabeledText;
