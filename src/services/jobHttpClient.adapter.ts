import { API_URL } from "../constants/constants";
import httpClientAdapter from "./httpClient.adapter";

export type SearchTerms = { title: string; city: string };

export const getJobs = () => {
  return httpClientAdapter.get(`${API_URL}/jobs`).then((res) => res.data.jobs);
};

export const searchJobs = ({ searchTerms }: { searchTerms: SearchTerms }) => {
  const { title, city } = searchTerms;

  return httpClientAdapter
    .get(`${API_URL}/jobs/search?title=${title}&city=${city}`)
    .then((res) => res.data.jobs);
};
