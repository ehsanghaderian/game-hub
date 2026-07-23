import type { Game } from "../../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { DefinitionItem } from "./DefinitionItem";
import { CriticScore } from "./Games/GameCriticScores/CriticScore";

interface Props {
  game: Game;
}
export const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} gap={5} as={"dl"}>
      <DefinitionItem term={"Platforms"}>
        {game.parent_platforms.map(({ platform }, index) => (
          <Text key={index}>{platform.slug}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term={"Genres"}>
        {game.genres.map((genre, index) => (
          <Text key={index}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term={"Publishers"}>
        {game.publishers.map((publisher, index) => (
          <Text key={index}>{publisher.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Score">
        {game.metacritic ? (
          <CriticScore score={game.metacritic}></CriticScore>
        ) : null}
      </DefinitionItem>
    </SimpleGrid>
  );
};
