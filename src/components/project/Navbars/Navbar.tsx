import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "../../ui/color-mode";
import { Searchbar } from "../Searchbars/Searchbar";
import { GiGamepad } from "react-icons/gi";
import useGameStore from "../../../Stores/GameStore";

function Navbar() {
  const { colorMode } = useColorMode();
  const setSearch = useGameStore((s) => s.setSearch);

  return (
    <HStack w="full" paddingY={4} paddingX={6} bg="bg.subtle" gap={10}>
      <HStack gap={5}>
        <GiGamepad
          size="48px"
          color={colorMode === "light" ? "black" : "gold"}
        />
        <Text letterSpacing={"10px"}>RAWG</Text>
      </HStack>
      <Searchbar on_submit={(searchText: string) => setSearch(searchText)} />

      <ColorModeButton />
    </HStack>
  );
}

export default Navbar;
