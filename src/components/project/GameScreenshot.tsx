import { UseScreenshots } from "../../Hooks/UseScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

export const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = UseScreenshots(gameId);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      gap={2}
    >
      {screenshots?.results.map((sc) => (
        <Image key={sc.id} src={sc.image}></Image>
      ))}
    </SimpleGrid>
  );
};
