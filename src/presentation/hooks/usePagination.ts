import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../services/jobHttpClient.adapter";

export const usePagination = (
  initialPagination: Pagination,
  ITEMS_PER_PAGE: number
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramPage = searchParams.get("page");

  const [pagination, setPagination] = useState(initialPagination);
  const [page, setPage] = useState(1);
  const { limit } = pagination;

  const onPageChange = useCallback(
    (_: any, page: number) => {
      const skip = (page - 1) * ITEMS_PER_PAGE;
      setPage(page);
      setPagination((prevState) => ({ ...prevState, skip, limit }));
      setSearchParams({ page: String(page) });
    },
    [ITEMS_PER_PAGE, limit, setSearchParams]
  );

  const initPagination = () => {
    setPage(1);
    setPagination(initialPagination);
    setSearchParams({ ...searchParams, page: "1" });
  };

  useEffect(() => {
    if (paramPage) {
      onPageChange(null, +paramPage);
    } else {
      setSearchParams({ ...searchParams, page: "1" });
    }
  }, [paramPage, onPageChange, page, setSearchParams, searchParams]);

  return { pagination, onPageChange, initPagination, page };
};
