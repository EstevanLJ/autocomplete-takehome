import axios, { AxiosResponse } from "axios";
import { ApiResult, ApiResolve } from "../interfaces";

const apiUrl = process.env.API_URL || "http://localhost:5000";

export const search = (query: string) => {
  return new Promise((resolve: ApiResolve, reject) => {
    axios
      .get(`${apiUrl}/search?q=${query}`)
      .then((res: AxiosResponse<ApiResult>) => {
        resolve(res.data.results);
      })
      .catch((err) => reject(err));
  });
};
