import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import Create from "../Services/HttpService";

export const UseData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const httpService = Create(endpoint);
    const { request, cancel } = httpService.GetAll<T>();

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
  }, []);

  return { data, error, isLoading, setData, setError };
};
