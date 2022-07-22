import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../services/jobHttpClient.adapter";

type SearchTerms = { title: string };

// FIXME:
// - separate of concern, pagination, searchTerms
//   - couple them to update `searchParams` avoiding overwrite

// FIXME:
// - should use application state to separate logic? instead of url?
//   - updating `searchParams` from different component

export const usePagination = (
  initialPagination: Pagination,
  ITEMS_PER_PAGE: number,
  searchTerms?: SearchTerms
) => {
  const title = searchTerms?.title;

  // to keep page state when user go back
  const [searchParams, setSearchParams] = useSearchParams();

  // to control items to fetch from backend
  const [pagination, setPagination] = useState(initialPagination);
  const { limit } = pagination;

  // to control page state in page component
  const paramPage = searchParams.get("page");
  const [page, setPage] = useState(paramPage ? +paramPage : 1);

  const onPageChange = useCallback(
    (_: any, page: number) => {
      const skip = (page - 1) * ITEMS_PER_PAGE;
      setPage(page);
      setPagination((prevState) => ({ ...prevState, skip, limit }));
    },
    [ITEMS_PER_PAGE, limit]
  );

  const initPagination = () => {
    setPage(1);
    setPagination(initialPagination);
    setSearchParams({ page: "1", title: title ? title : "" });
  };

  useEffect(() => {
    onPageChange(null, page);
    setSearchParams({ title: title ? title : "", page: String(page) });
  }, [title, page, setSearchParams, onPageChange]);

  return { pagination, onPageChange, initPagination, page };
};
