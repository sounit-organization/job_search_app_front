import { API_URL } from "../constants/constants";
import { User } from "../domain/User";
import httpClientAdapter from "./httpClient.adapter";

type SignUpData = AuthData & {
  firstName: string;
  lastName: string;
};

export type LoginData = AuthData;

type AuthData = {
  email: string;
  password: string;
};

type AuthResponse = { user: User; token: string };

export const signUp = (signUpData: SignUpData): Promise<AuthResponse> => {
  return httpClientAdapter
    .post(`${API_URL}/auth/signup`, signUpData)
    .then((res) => res.data);
};

export const login = (loginData: LoginData) => {
  return httpClientAdapter
    .post(`${API_URL}/auth/login`, loginData)
    .then((res) => res.data);
};
