import { UseData } from "./UseData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export const UseGames = () => UseData<Game>("games");
