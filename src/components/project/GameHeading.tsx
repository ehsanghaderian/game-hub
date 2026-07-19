import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery | null;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const headingContents = [
    gameQuery?.platform?.name,
    gameQuery?.genre?.name,
    "Games",
  ];
  const heading = headingContents.join(" ");

  return (
    <Heading
      as={"h1"}
      fontSize={{ base: "4xl", md: "5xl" }}
      marginY={5}
      lineHeight={{ base: 1.3, md: 1.2 }}
    >
      {heading}
    </Heading>
  );
};
