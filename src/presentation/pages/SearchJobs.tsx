import { FC, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import { Pagination as PaginationType } from "../../services/jobHttpClient.adapter";
import { ITEMS_PER_PAGE } from "../../constants/constants";
import JobSearchForm from "../components/organisms/SearchJobForm";
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

const SearchJobs: FC<Props> = () => {
  const { searchedJobs, count } = useAppSelector((state) => state.searchedJobs);
  const { pagination, onPageChange, initPagination, page } = usePagination(
    initialPagination,
    ITEMS_PER_PAGE
  );
  const [isOnSearch, setIsOnSearch] = useState(true);

  const changePageHandler = (_: any, page: number) => {
    setIsOnSearch(true);
    onPageChange(_, page);
  };

  return (
    <div>
      <JobSearchForm
        initialValues={formInitialValues}
        pagination={pagination}
        initPagination={initPagination}
        isOnSearch={isOnSearch}
        setIsOnSearch={setIsOnSearch}
      />
      <JobCardList jobList={searchedJobs} />
      <Pagination
        page={page}
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        onChange={changePageHandler}
        className="flex justify-center mb-10"
      />
    </div>
  );
};

export default SearchJobs;
