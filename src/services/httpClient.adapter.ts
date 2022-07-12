import axios from "axios";
import { API_URL } from "../constants/constants";

const httpClientAdapter = axios.create({
  baseURL: API_URL,
});

export default httpClientAdapter;
