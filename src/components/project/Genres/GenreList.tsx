import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { UseGenres } from "../../../Hooks/UseGenres";
import { GetCroppedImagesUrl } from "../../../Services/GetCroppedImagesUrl";

export const GenreList = () => {
  const { data: genres } = UseGenres();

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
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};
