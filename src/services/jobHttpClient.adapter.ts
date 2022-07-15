import { API_URL } from "../constants/constants";
import httpClientAdapter from "./httpClient.adapter";

export type SearchTerms = { title: string; city: string };

export type Pagination = { skip: number; limit: number };

export const getJobs = ({ pagination }: { pagination: Pagination }) => {
  const { skip, limit } = pagination;
  return httpClientAdapter
    .get(`${API_URL}/jobs?skip=${skip}&limit=${limit}`)
    .then((res) => res.data);
};

export const searchJobs = ({ searchTerms }: { searchTerms: SearchTerms }) => {
  const { title, city } = searchTerms;

  return httpClientAdapter
    .get(`${API_URL}/jobs/search?title=${title}&city=${city}`)
    .then((res) => res.data);
};
