import { IJob } from "./../domain/Job";
import { API_URL } from "../constants/constants";
import httpClientAdapter from "./httpClient.adapter";

type SearchTerms = {
  title: string;
  city: string;
};

export type SearchJobsArgs = {
  searchTerms: SearchTerms;
  pagination: Pagination;
  isOnSearch?: boolean;
  setIsOnSearch?: React.Dispatch<React.SetStateAction<boolean>>;
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

export const getJobById = (jobId: string): Promise<IJob> => {
  return httpClientAdapter
    .get(`${API_URL}/jobs/${jobId}`)
    .then((res) => res.data.job);
};

export const createJob = ({
  newJob,
  token,
}: {
  newJob: IJob;
  token: string;
}): Promise<IJob> => {
  return httpClientAdapter
    .post(`${API_URL}/jobs`, newJob, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const updateJob = ({
  jobFormData,
  token,
  jobId,
}: {
  jobFormData: IJob;
  token: string;
  jobId: string;
}): Promise<IJob> => {
  return httpClientAdapter
    .patch(`${API_URL}/jobs/${jobId}`, jobFormData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
