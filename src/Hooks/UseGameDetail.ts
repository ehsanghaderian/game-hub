import { useQuery } from "@tanstack/react-query";
import Create from "../Services/HttpService";

export interface GameDetail {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
}

const httpService = Create<GameDetail>("games");
export const useGameDetail = (slug: string) => {
  return useQuery<GameDetail, Error>({
    queryKey: ["games", slug],
    queryFn: () => httpService.Get(slug),
  });
};
