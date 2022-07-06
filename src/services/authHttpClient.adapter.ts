import { API_URL } from "../constants/constants";
import httpClientAdapter from "./httpClient.adapter";

type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const signUp = (signUpData: SignUpData) => {
  return httpClientAdapter
    .post(`${API_URL}/auth/signup`!, signUpData)
    .then((res) => res.data);
};
