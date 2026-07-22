import { Heading } from "@chakra-ui/react";
import { UsePlatform } from "../../../Hooks/UsePlatform";
import { UseGenre } from "../../../Hooks/UseGenre";
import useGameStore from "../../../Stores/GameStore";

export const GameHeading = () => {
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const selectedPlatform = UsePlatform(selectedPlatformId);
  const selectedGenre = UseGenre(selectedGenreId);
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
