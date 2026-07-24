import { useQuery } from "@tanstack/react-query";
import Create, { type FetchResponse } from "../Services/HttpService";
import type Trailer from "../entities/Trailer";

export const UseTrailers = (id: number) => {
  const httpService = Create<Trailer>(`games/${id}/movies`);
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", id],
    queryFn: httpService.GetAll,
  });
};
