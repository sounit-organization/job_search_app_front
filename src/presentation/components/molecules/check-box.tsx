import { ChangeEvent, FC, useState } from "react";
import classes from "./check-box.module.css";

const jobTypes = [
  { id: 1, name: "Part Time" },
  { id: 2, name: "Full Time" },
];

interface Props {
  // FIXME avoid any
  onChecked: any;
}

const CheckBox: FC<Props> = ({ onChecked }) => {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);

  const showCheckBoxHandler: any = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setShow(!show);
  };

  const inputChangeHandler = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    onChecked(newChecked);
  };

  return (
    <div className={classes["job-type__wrapper"]}>
      <button
        onClick={showCheckBoxHandler}
        className={`${classes["job-type__btn"]} ${
          show && classes["job-type__show"]
        }`}
      >
        Job Type
      </button>
      <div className={classes["check-wrapper"]}>
        {show &&
          jobTypes.map((job) => {
            return (
              <div key={job.id} className={classes["job-type__check"]}>
                <label className={classes["job-type__label"]}>{job.name}</label>
                <input
                  className={classes["job-type__input"]}
                  type="checkbox"
                  name={job.name}
                  value={job.id}
                  onChange={() => inputChangeHandler(job.id)}
                ></input>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CheckBox;
