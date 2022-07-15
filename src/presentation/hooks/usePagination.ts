import { useState } from "react";
import { Pagination } from "../../services/jobHttpClient.adapter";

export const usePagination = (
  initialPagination: Pagination,
  ITEMS_PER_PAGE: number
) => {
  const [pagination, setPagination] = useState(initialPagination);
  const { limit } = pagination;

  const changePageHandler = (_: any, page: number) => {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    setPagination((prevState) => ({ ...prevState, skip, limit }));
  };

  return { pagination, changePageHandler };
};
