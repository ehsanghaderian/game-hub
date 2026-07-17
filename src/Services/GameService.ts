import Create from "./HttpService";

export interface Game {
  id: number;
  name: string;
}

export default Create("games");
