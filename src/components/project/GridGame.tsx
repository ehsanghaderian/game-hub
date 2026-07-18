import { SimpleGrid } from "@chakra-ui/react";
import { UseGames } from "../../Hooks/UseGames";
import { GameCard } from "./GameCards/GameCard";
import { GameCardSkeleton } from "./GameCards/GameCardSkeleton";
import { GameCardContainer } from "./GameCards/GameCardContainer";

export const GridGame = () => {
  const {
    data: games,
    error,
    isLoading,
    setData: setGames,
    setError,
  } = UseGames();
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
          xl: 4,
        }}
        gap={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
