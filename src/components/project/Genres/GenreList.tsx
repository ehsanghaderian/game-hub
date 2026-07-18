import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { UseGenres } from "../../../Hooks/UseGenres";
import { GetCroppedImagesUrl } from "../../../Services/GetCroppedImagesUrl";

export const GenreList = () => {
  const { data: genres, isLoading, error } = UseGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List.Root listStyleType="none">
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={GetCroppedImagesUrl(genre.image_background)}
            />
            <Button fontSize={"lg"}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};
