import { SimpleGrid } from "@chakra-ui/react";
import { UseGames } from "../../Hooks/UseGames";
import { GameCard } from "./GameCards/GameCard";

export const GridGame = () => {
  const { games, error, isLoading, setGames, setError } = UseGames();

  return (
    <>
      {isLoading && (
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      )}
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
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
