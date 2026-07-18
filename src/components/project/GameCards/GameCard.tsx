import type { Game } from "../../../Services/GameService";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GamePlatformList } from "../GamePlatforms/GamePlatformList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root overflow={"hidden"} borderRadius={10}>
        <Image src={game.background_image} />
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
          <GamePlatformList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform,
            )}
          ></GamePlatformList>
        </CardBody>
      </Card.Root>
    </>
  );
};
