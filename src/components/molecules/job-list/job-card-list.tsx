import Input from "../../atoms/input";
import JobCard from "./job-card";
import classes from "./job-card-list.module.css";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import CheckBox from "../../molecules/check-box";
import { IJob } from "../../../domain/Job";

const componentName = "JobCardList";

interface Props {
  jobList: IJob[];
}

const JobCardList: FC<Props> = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>([]);
  // const [checked, setChecked] = useState([]);

  const isFilteredJobsEmpty = filteredJobs.length === 0;

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  const cityChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCity(event.target.value);
  };

  // FIXME: make http request to backend to find job
  const filterJobsHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredJobs = props.jobList.filter((job) => {
      // there is one record from before that we added city to the table so I added the condition of undefined
      if (searchCity !== "" && job.city) {
        // if (searchCity !== "" && searchTitle !== "") {
        //   return (
        //     job.city.toLowerCase().includes(searchCity.trim().toLowerCase()) ||
        //     job.title.toLowerCase().includes(searchTitle.trim().toLowerCase())
        //   );
        console.log(job.city);
        return job.city.toLowerCase().includes(searchCity.trim().toLowerCase());
      }

      if (searchTitle !== "") {
        return job.title
          .toLowerCase()
          .includes(searchTitle.trim().toLowerCase());
      }

      return false;
    });

    setFilteredJobs(filteredJobs);
  };

  const checkedHandler = (checkedArr: number[]) => {
    const filtered = props.jobList.filter((job) => {
      // there is one record from before that we added desc to the table so I added the condition of undefined
      if (job.description !== "" && job.description !== undefined) {
        // checkedArr?.forEach((checked) => {
        if (checkedArr[0] === 1 && checkedArr[1] === 2) {
          return (
            job.description
              .toLowerCase()
              .includes("full time".trim().toLowerCase()) ||
            job.description
              .toLowerCase()
              .includes("part time".trim().toLowerCase())
          );
        }
        if (checkedArr[0] === 1) {
          return job.description
            .toLowerCase()
            .includes("part time".trim().toLowerCase());
        }
        if (checkedArr[0] === 2) {
          return job.description
            .toLowerCase()
            .includes("full time".trim().toLowerCase());
        }
        // });
      }

      return false;
    });
    console.log(filtered);
    setFilteredJobs(filtered);
  };

  return (
    <>
      <div className={classes[componentName]}>
        <Input
          placeholder="Job title"
          className={classes[`${componentName}__input`]}
          onChange={titleChangeHandler}
          value={searchTitle}
        />
        <Input
          placeholder="Vancouver, BC"
          className={classes[`${componentName}__input`]}
          onChange={cityChangeHandler}
          value={searchCity}
        />
        <button
          // FIXME'
          onClick={filterJobsHandler as any}
          className={classes[`${componentName}__btn`]}
        >
          Find Jobs
        </button>
      </div>
      <CheckBox onChecked={checkedHandler} />
      <ul className={classes[`${componentName}__list`]}>
        {!isFilteredJobsEmpty
          ? filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                className={classes[`${componentName}__card`]}
              />
            ))
          : props.jobList.map((job: IJob) => (
              <JobCard
                key={job.id}
                job={job}
                className={classes[`${componentName}__card`]}
              />
            ))}
      </ul>
    </>
  );
};

export default JobCardList;
