import { UseData } from "./UseData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const UsePlatform = () => UseData<Platform>("platforms");
