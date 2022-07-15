import { FC, useState } from "react";
import classes from "./JobList.module.css";
import JobSearchForm from "../components/organisms/JobSearchForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { useGetJobsQuery } from "../hooks/useJobsQuery";
import JobCardList from "../components/organisms/JobCardList";
import LoadingPage from "../components/organisms/LoadingPage";
import Pagination from "../components/organisms/Pagination";
import { Pagination as PaginationType } from "../../services/jobHttpClient.adapter";
import { ITEMS_PER_PAGE } from "../../constants/constants";

export const jobsUrl = `${process.env.REACT_APP_BACKEND_URL}/jobs`;

const formInitialValues = {
  title: "",
  city: "",
};

const initialPagination: PaginationType = {
  skip: 0,
  limit: ITEMS_PER_PAGE,
};

const JobList: FC = () => {
  // FIXME: make usePagination hook
  const [pagination, setPagination] = useState(initialPagination);

  const { limit } = pagination;
  const getJobsQuery = useGetJobsQuery(pagination);
  // use application scope
  // because jobs are updated both from JobList and SearchJobForm
  const { jobs, count } = useAppSelector((state) => state.jobs);

  // FIXME: make usePagination hook
  const changePageHandler = (_: any, page: number) => {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    setPagination((prevState) => ({ ...prevState, skip, limit }));
  };

  return (
    <div className={classes["JobList"]}>
      {getJobsQuery.isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <JobSearchForm initialValues={formInitialValues} />
          <JobCardList jobList={jobs} />
        </>
      )}
      {/* put pagination outside of toggle rendering to prevent reset state */}
      <Pagination
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        onChange={changePageHandler}
        className="flex justify-center mb-10"
      />
    </div>
  );
};

export default JobList;
