import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  const color =
    score >= 75 ? "green" : score < 75 && score > 50 ? "yellow" : "red";
  return (
    <Badge color={color} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};
