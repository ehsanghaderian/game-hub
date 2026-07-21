import { UsePlatforms } from "./UsePlatforms";

export const UsePlatform = (platformId?: number | null) => {
  const { data: platforms } = UsePlatforms();
  return platforms?.results.find((platform) => platform.id === platformId);
};
