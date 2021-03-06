import { API_URL } from "../constants/constants";
import { IJob } from "./../domain/Job";
import httpClientAdapter from "./httpClient.adapter";

export const getJobs = (): Promise<IJob[]> => {
  return httpClientAdapter.get(`${API_URL}/jobs`).then((res) => res.data.jobs);
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
  updatedJob,
  token,
  jobId,
}: {
  updatedJob: IJob;
  token: string;
  jobId: string;
}): Promise<IJob> => {
  return httpClientAdapter
    .patch(`${API_URL}/jobs/${jobId}`, updatedJob, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
