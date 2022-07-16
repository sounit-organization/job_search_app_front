import { FC } from "react";
import { usePagination } from "../hooks/usePagination";
import { Pagination as PaginationType } from "../../services/jobHttpClient.adapter";
import { ITEMS_PER_PAGE } from "../../constants/constants";
import JobSearchForm from "../components/organisms/JobSearchForm";
import Pagination from "../components/organisms/Pagination";
import { useAppSelector } from "../hooks/reduxHooks";
import JobCardList from "../components/organisms/JobCardList";

const formInitialValues = {
  title: "",
  city: "",
};

const initialPagination: PaginationType = {
  skip: 0,
  limit: ITEMS_PER_PAGE,
};

type Props = {};

const SearchJobs: FC<Props> = (props) => {
  const { searchedJobs, count } = useAppSelector((state) => state.searchedJobs);
  const { pagination, changePageHandler } = usePagination(
    initialPagination,
    ITEMS_PER_PAGE
  );

  return (
    <div>
      <JobSearchForm
        initialValues={formInitialValues}
        pagination={pagination}
      />
      <JobCardList jobList={searchedJobs} />
      <Pagination
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        onChange={changePageHandler}
        className="flex justify-center mb-10"
      />
    </div>
  );
};

export default SearchJobs;
