import { useQuery } from "@tanstack/react-query";
import Create, { type FetchResponse } from "../Services/HttpService";
import type { Genre } from "../entities/Genre";
const httpService = Create<Genre>("genres");

export const UseGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: httpService.GetAll,
  });
};
