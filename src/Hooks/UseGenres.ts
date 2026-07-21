import { useQuery } from "@tanstack/react-query";
import Create, { type FetchResponse } from "../Services/HttpService";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const httpService = Create<Genre>("genres");

export const UseGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: httpService.GetAll,
  });
};
