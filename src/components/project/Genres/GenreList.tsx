import {
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { UseGenres, type Genre } from "../../../Hooks/UseGenres";
import { GetCroppedImagesUrl } from "../../../Services/GetCroppedImagesUrl";

interface Props {
  on_Click: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ on_Click, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = UseGenres();

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
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant={"ghost"}
              onClick={() => on_Click(genre)}
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
