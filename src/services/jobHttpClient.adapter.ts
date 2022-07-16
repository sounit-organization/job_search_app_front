import { API_URL } from "../constants/constants";
import httpClientAdapter from "./httpClient.adapter";

type SearchTerms = {
  title: string;
  city: string;
};

export type SearchJobsArgs = {
  searchTerms: SearchTerms;
  pagination: Pagination;
};

export type Pagination = { skip: number; limit: number };

export const getJobs = (pagination: Pagination) => {
  const { skip, limit } = pagination;
  return httpClientAdapter
    .get(`${API_URL}/jobs?skip=${skip}&limit=${limit}`)
    .then((res) => res.data);
};

export const searchJobs = (searchJobsArgs: SearchJobsArgs) => {
  const { searchTerms, pagination } = searchJobsArgs;
  const { title, city } = searchTerms;
  const { skip, limit } = pagination;

  return httpClientAdapter
    .get(
      `${API_URL}/jobs/search?title=${title}&city=${city}&skip=${skip}&limit=${limit}`
    )
    .then((res) => res.data);
};
