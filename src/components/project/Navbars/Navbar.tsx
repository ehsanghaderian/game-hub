import {
  HStack,
  Image,
  Text,
  Box,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { ColorModeButton } from "../../ui/color-mode";
import { Searchbar } from "../Searchbars/Searchbar";
import navImage from "../../../assets/controller.png";
import useGameStore from "../../../Stores/GameStore";
import { Link } from "react-router-dom";
import useSidebarShowStore from "../../../Stores/SidebarShowStore";
import { FiMenu } from "react-icons/fi";
import { useEffect } from "react";

function Navbar() {
  const setSearch = useGameStore((s) => s.setSearch);
  const setShowSideBar = useSidebarShowStore((s) => s.setShowSideBar);
  const showSidebar = useSidebarShowStore((s) => s.showSidebar);
  const isBase = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });

  useEffect(() => {
    if (!isBase) {
      setShowSideBar(false);
    }
  }, [isBase, setShowSideBar]);

  return (
    <HStack w="full" paddingY={4} paddingX={4} bg="bg.subtle" gap={5}>
      <Link to={"/"}>
        <HStack gap={3} flexShrink={0}>
          {isBase ? (
            <Button
              cursor={"pointer"}
              onClick={() => setShowSideBar(!showSidebar)}
              variant="ghost"
              size="sm"
            >
              <FiMenu size="24px" />
            </Button>
          ) : (
            <Image boxSize={{ base: "24px", md: "32px" }} src={navImage} />
          )}
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
