import { TOKEN_KEY, USER_ID_KEY } from "../constants/constants";

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const saveUserId = (userId: string) => {
  localStorage.setItem(USER_ID_KEY, userId);
};

export const getUserId = () => {
  return localStorage.getItem(USER_ID_KEY);
};

export const removeUserId = () => {
  localStorage.removeItem(USER_ID_KEY);
};
