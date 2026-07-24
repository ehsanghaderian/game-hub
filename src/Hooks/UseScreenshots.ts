import { useQuery } from "@tanstack/react-query";
import Create, { type FetchResponse } from "../Services/HttpService";
import type { Screenshot } from "../entities/Screenshot";

export const UseScreenshots = (id: number) => {
  const httpService = Create<Screenshot>(`games/${id}/screenshots`);
  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", id],
    queryFn: httpService.GetAll,
  });
};
