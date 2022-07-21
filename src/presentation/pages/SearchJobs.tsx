import { FC, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import { Pagination as PaginationType } from "../../services/jobHttpClient.adapter";
import { ITEMS_PER_PAGE } from "../../constants/constants";
import JobSearchForm from "../components/organisms/SearchJobForm";
import Pagination from "../components/organisms/Pagination";
import { useAppSelector } from "../hooks/reduxHooks";
import JobCardList from "../components/organisms/JobCardList";
import useForm, { FormInitialValues } from "../hooks/useForm";
import { useSearchJobsQuery } from "../hooks/useJobsQuery";
import LoadingSpinner from "../components/organisms/LoadingSpinner";
import { useSearchParams } from "react-router-dom";

const initialPagination: PaginationType = {
  skip: 0,
  limit: ITEMS_PER_PAGE,
};

type Props = {};

const SearchJobs: FC<Props> = () => {
  const { searchedJobs, count } = useAppSelector((state) => state.searchedJobs);

  const [searchParams] = useSearchParams();
  const paramTitle = searchParams.get("title");

  const formInitialValues: FormInitialValues = {
    title: paramTitle ? paramTitle : "",
    city: "",
  };

  const { values, valueChangeHandler } = useForm(formInitialValues);
  const { title, city } = values;

  const { pagination, onPageChange, initPagination, page } = usePagination(
    initialPagination,
    ITEMS_PER_PAGE,
    { title }
  );

  // to set dependency to search-job react-query
  const [isOnSearch, setIsOnSearch] = useState(true);
  const searchJobsQuery = useSearchJobsQuery({
    searchTerms: { title, city },
    pagination,
    isOnSearch,
    setIsOnSearch,
  });

  const changePageHandler = (_: any, page: number) => {
    setIsOnSearch(true);
    onPageChange(_, page);
  };

  return (
    <>
      <JobSearchForm
        initialValues={{ title, city }}
        initPagination={initPagination}
        setIsOnSearch={setIsOnSearch}
        valueChangeHandler={valueChangeHandler}
      />
      {searchJobsQuery.isLoading ? (
        <div className="flex justify-center py-24">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <JobCardList jobList={searchedJobs} />
        </>
      )}
      <Pagination
        page={page}
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        onChange={changePageHandler}
        className="flex justify-center mb-10"
      />
    </>
  );
};

export default SearchJobs;
