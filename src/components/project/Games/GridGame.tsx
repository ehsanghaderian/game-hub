import { SimpleGrid, Spinner, Box } from "@chakra-ui/react";
import { UseGames } from "../../../Hooks/UseGames";
import { GameCard } from "./GameCards/GameCard";
import { GameCardSkeleton } from "./GameCards/GameCardSkeleton";
import { GameCardContainer } from "./GameCards/GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const GridGame = () => {
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = UseGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box width="100%" maxWidth="100%" overflowX="hidden">
      {error && <p className="text-red-400">error happened</p>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner />}
        style={{ overflow: "visible" }}
      >
        <SimpleGrid
          padding={{
            base: 2,
            sm: 4,
            md: 6,
            lg: 10,
          }}
          columns={{
            base: 1,
            sm: 2,
            md: 2,
            lg: 3,
          }}
          gridGap={{
            // Use gridGap instead of gap or spacing
            base: 5,
            sm: 4,
            md: 5,
          }}
          width="100%"
          maxWidth="100%"
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
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};
