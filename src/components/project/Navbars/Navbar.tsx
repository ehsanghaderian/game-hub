import { HStack, Image, Text, Box } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "../../ui/color-mode";
import { Searchbar } from "../Searchbars/Searchbar";
import navImage from "../../../assets/controller.png";
import useGameStore from "../../../Stores/GameStore";
import { Link } from "react-router-dom";

function Navbar() {
  const { colorMode } = useColorMode();
  const setSearch = useGameStore((s) => s.setSearch);

  return (
    <HStack w="full" paddingY={4} paddingX={4} bg="bg.subtle" gap={5}>
      <Link to={"/"}>
        <HStack gap={3} flexShrink={0}>
          <Image boxSize={{ base: "24px", md: "32px" }} src={navImage} />
          <Text
            fontSize={{ base: "xs", sm: "sm", md: "lg" }}
            letterSpacing={{ base: "5px", md: "10px" }}
            display={{ base: "none", sm: "block" }}
          >
            GAMEHUB
          </Text>
        </HStack>
      </Link>

      <Box flex={1} minW={0}>
        <Searchbar on_submit={(searchText: string) => setSearch(searchText)} />
      </Box>

      <Box flexShrink={0}>
        <ColorModeButton />
      </Box>
    </HStack>
  );
}

export default Navbar;
