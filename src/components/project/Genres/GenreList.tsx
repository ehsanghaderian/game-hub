import {
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { UseGenres } from "../../../Hooks/UseGenres";
import { GetCroppedImagesUrl } from "../../../Services/GetCroppedImagesUrl";
import useGameStore from "../../../Stores/GameStore";

export const GenreList = () => {
  const { data: genres, isLoading, error } = UseGenres();
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameStore((s) => s.setGenreId);

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List.Root listStyleType="none">
      <Heading fontSize={"3xl"} marginBottom={4}>
        Genres
      </Heading>
      {genres?.results?.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <Flex alignItems="center" gap={0}>
            <Image
              boxSize={"44px"}
              borderRadius={8}
              src={GetCroppedImagesUrl(genre.image_background)}
            />
            <Button
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              variant={"ghost"}
              onClick={() => setGenreId(genre.id)}
              fontSize={"lg"}
              whiteSpace={"normal"}
            >
              {genre.name}
            </Button>
          </Flex>
        </ListItem>
      ))}
    </List.Root>
  );
};
