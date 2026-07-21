import Create, { type FetchResponse } from "../Services/HttpService";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const httpService = Create<Platform>("platforms");

export const UsePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: httpService.GetAll,
  });
};
