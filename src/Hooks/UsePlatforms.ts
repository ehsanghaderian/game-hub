import Create, { type FetchResponse } from "../Services/HttpService";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "../entities/Platform";

const httpService = Create<Platform>("platforms");

export const UsePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: httpService.GetAll,
  });
};
