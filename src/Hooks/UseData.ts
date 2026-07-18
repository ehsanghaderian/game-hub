import { useEffect, useState } from "react";
import { CanceledError, type AxiosRequestConfig } from "axios";
import Create from "../Services/HttpService";

export const UseData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const httpService = Create(endpoint);
      const { request, cancel } = httpService.GetAll<T>(requestConfig);

      setIsLoading(true);

      request
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return cancel;
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading, setData, setError };
};
