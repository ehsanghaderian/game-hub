import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { UseGames } from "../../../Hooks/UseGames";
import { GameCard } from "./GameCards/GameCard";
import { GameCardSkeleton } from "./GameCards/GameCardSkeleton";
import { GameCardContainer } from "./GameCards/GameCardContainer";
import type { GameQuery } from "../../../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}
export const GridGame = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = UseGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <p className="text-red-400">error happened</p>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          padding={10}
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
      </InfiniteScroll>
    </>
  );
};
