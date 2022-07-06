import { API_URL } from "../constants/constants";
import { User } from "../domain/User";
import httpClientAdapter from "./httpClient.adapter";

type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type SignupResponse = { user: User; token: string };

export const signUp = (signUpData: SignUpData): Promise<SignupResponse> => {
  return httpClientAdapter
    .post(`${API_URL}/auth/signup`!, signUpData)
    .then((res) => res.data);
};
