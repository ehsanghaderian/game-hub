import { useParams } from "react-router-dom";
import { useGameDetail } from "../Hooks/UseGameDetail";

import { ExpandableText } from "../components/project/ExpandableText";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { GameAttributes } from "../components/project/GameAttributes";
import { GameTrailer } from "../components/project/GameTrailer";
import { GameScreenshot } from "../components/project/GameScreenshot";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <GridItem>
          <Heading fontSize={"4xl"} lineHeight={{ base: 1.1, md: 1 }}>
            {game.name}
          </Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshot gameId={game.id}></GameScreenshot>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
