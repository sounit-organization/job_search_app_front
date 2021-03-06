import { FC } from "react";
import classes from "./JobList.module.css";
import { useAppSelector } from "../hooks/reduxHooks";
import { useGetJobsQuery } from "../hooks/useJobsQuery";
import JobCardList from "../components/organisms/JobCardList";
import LoadingPage from "../components/organisms/LoadingPage";
import Pagination from "../components/organisms/Pagination";
import { Pagination as PaginationType } from "../../services/jobHttpClient.adapter";
import { ITEMS_PER_PAGE } from "../../constants/constants";
import { usePagination } from "../hooks/usePagination";

export const jobsUrl = `${process.env.REACT_APP_BACKEND_URL}/jobs`;

const initialPagination: PaginationType = {
  skip: 0,
  limit: ITEMS_PER_PAGE,
};

const JobList: FC = () => {
  const { pagination, onPageChange, page } = usePagination(
    initialPagination,
    ITEMS_PER_PAGE
  );

  // use application scope
  // because jobs are updated both from JobList and SearchJobForm
  const { jobs, count } = useAppSelector((state) => state.jobs);
  const getJobsQuery = useGetJobsQuery(pagination);

  const pageChangeHandler = (_: any, page: number) => {
    onPageChange(_, page);
  };

  return (
    <div className={classes["JobList"]}>
      {getJobsQuery.isLoading ? (
        <LoadingPage />
      ) : (
        <JobCardList jobList={jobs} />
      )}
      {/* put pagination outside of toggle rendering to prevent reset state */}
      <Pagination
        page={page}
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        onChange={pageChangeHandler}
        className="flex justify-center mb-10"
      />
    </div>
  );
};

export default JobList;
