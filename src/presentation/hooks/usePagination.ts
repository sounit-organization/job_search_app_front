import { useState } from "react";
import { Pagination } from "../../services/jobHttpClient.adapter";

export const usePagination = (
  initialPagination: Pagination,
  ITEMS_PER_PAGE: number
) => {
  const [pagination, setPagination] = useState(initialPagination);
  const [page, setPage] = useState(1);
  const { limit } = pagination;

  const onPageChange = (_: any, page: number) => {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    setPage(page);
    setPagination((prevState) => ({ ...prevState, skip, limit }));
  };

  const initPagination = () => {
    setPage(1);
    setPagination(initialPagination);
  };

  return { pagination, onPageChange, initPagination, page };
};
