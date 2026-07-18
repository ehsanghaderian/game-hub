import Create from "./HttpService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
}

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export default Create("games");
