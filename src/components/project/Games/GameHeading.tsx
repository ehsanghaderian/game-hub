import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../../../App";
import { UsePlatform } from "../../../Hooks/UsePlatforms";
import { UseGenres } from "../../../Hooks/UseGenres";

interface Props {
  gameQuery: GameQuery | null;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatform = UsePlatform().data?.results.find(
    (platform) => platform.id === gameQuery?.platformId,
  );
  const selectedGenre = UseGenres().data?.results.find(
    (genre) => genre.id === gameQuery?.genreId,
  );
  const headingContents = [
    selectedPlatform?.name,
    selectedGenre?.name,
    "Games",
  ];
  const heading = headingContents.join(" ");

  return (
    <Heading
      as={"h1"}
      fontSize={{ base: "4xl", md: "5xl" }}
      marginY={5}
      lineHeight={{ base: 1.3, md: 1.2 }}
    >
      {heading}
    </Heading>
  );
};
