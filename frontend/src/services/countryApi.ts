import axios, { AxiosResponse } from "axios";
import { ApiResult, ApiResolve } from "../interfaces";

export const search = (query: string) => {
  return new Promise((resolve: ApiResolve, reject) => {
    axios
      .get(`http://backend:5000/search?q=${query}`)
      .then((res: AxiosResponse<ApiResult>) => {
        resolve(res.data.results);
      })
      .catch((err) => reject(err));
  });
};
