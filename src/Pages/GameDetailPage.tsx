import { useParams } from "react-router-dom";
import { useGameDetail } from "../Hooks/UseGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner></Spinner>;
  if (error || !gameDetail) throw error;
  return (
    <>
      <Heading>{gameDetail.slug}</Heading>
      <Text>{gameDetail.description_raw}</Text>
    </>
  );
};
