import { SimpleGrid } from "@chakra-ui/react";
import { UseGames } from "../../Hooks/UseGames";
import { GameCard } from "./GameCards/GameCard";
import { GameCardSkeleton } from "./GameCards/GameCardSkeleton";
import { GameCardContainer } from "./GameCards/GameCardContainer";
import type { Genre } from "../../Hooks/UseGenres";
import type { Platform } from "../../Hooks/UsePlatforms";
import type { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}
export const GridGame = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    setData: setGames,
    setError,
  } = UseGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <p className="text-red-400">error happened</p>}

      <SimpleGrid
        padding={10}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        gap={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
