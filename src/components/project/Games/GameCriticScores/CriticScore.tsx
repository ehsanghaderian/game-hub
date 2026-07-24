import { Badge } from "@chakra-ui/react";
import { useColorMode } from "../../../ui/color-mode";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  if (!score) return null;
  const { colorMode } = useColorMode();
  let bg;
  let color;
  if (score >= 75) {
    color = colorMode === "light" ? "green.100" : "green";
    bg = colorMode === "light" ? "green.700" : "green.900";
  } else if (score < 75 && score > 50) {
    color = colorMode === "light" ? "yellow.100" : "yellow";
    bg = colorMode === "light" ? "yellow.700" : "yellow.900";
  } else {
    color = colorMode === "light" ? "red.100" : "red";
    bg = colorMode === "light" ? "red.700" : "red.900";
  }
  return (
    <Badge
      bg={bg}
      color={color}
      fontSize="14px"
      paddingX={2}
      borderRadius={"lg"}
    >
      {score}
    </Badge>
  );
};
