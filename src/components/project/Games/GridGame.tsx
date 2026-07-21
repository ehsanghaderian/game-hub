import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { UseGames } from "../../../Hooks/UseGames";
import { GameCard } from "./GameCards/GameCard";
import { GameCardSkeleton } from "./GameCards/GameCardSkeleton";
import { GameCardContainer } from "./GameCards/GameCardContainer";
import type { GameQuery } from "../../../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}
export const GridGame = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = UseGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box padding={10}>
      {error && <p className="text-red-400">error happened</p>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        gap={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results?.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button mt={5} variant={"subtle"} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Load more..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};
