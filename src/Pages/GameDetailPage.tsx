import { useParams } from "react-router-dom";
import { useGameDetail } from "../Hooks/UseGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { ExpandableText } from "../components/project/ExpandableText";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner></Spinner>;
  if (error || !gameDetail) throw error;
  return (
    <>
      <Heading>{gameDetail.slug}</Heading>
      <ExpandableText>{gameDetail.description_raw}</ExpandableText>
    </>
  );
};
