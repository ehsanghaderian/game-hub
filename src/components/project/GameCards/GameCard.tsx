import type { Game } from "../../../Services/GameService";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { GamePlatformList } from "../GamePlatforms/GamePlatformList";
import { CriticScore } from "../GameCriticScores/CriticScore";
import { useColorMode } from "../../ui/color-mode";
import { GetCroppedImagesUrl } from "../../../Services/GetCroppedImagesUrl";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Card.Root
        overflow={"hidden"}
        borderRadius={10}
        bg={colorMode === "light" ? "whitesmoke" : "gray.900"}
      >
        <Image src={GetCroppedImagesUrl(game.background_image)} />
        <CardBody>
          <Heading
            fontSize={{
              sm: "2xl",
              md: "xl",
              lg: "lg",
            }}
          >
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <GamePlatformList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform,
              )}
            ></GamePlatformList>
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};
