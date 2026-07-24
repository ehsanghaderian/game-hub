import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { GenreList } from "../components/project/Genres/GenreList";
import { GameHeading } from "../components/project/Games/GameHeading";
import { SortSelector } from "../components/project/Games/GamePlatforms/SortSelector";
import { PlatformSelector } from "../components/project/Games/GamePlatforms/PlatformSelector";
import { GridGame } from "../components/project/Games/GridGame";
import useSidebarShowStore from "../Stores/SidebarShowStore";

export const HomePage = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const showSideBar = useSidebarShowStore((s) => s.showSidebar);

  return (
    <Grid
      gridTemplateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      overflowX="hidden"
      maxWidth="100vw"
    >
      <Show when={showAside || showSideBar}>
        {showSideBar ? (
          <Box padding={5} bg={"gray.950"}>
            <GenreList />
          </Box>
        ) : (
          <GridItem area="aside" p={4}>
            <GenreList />
          </GridItem>
        )}
      </Show>

      <Show when={!showSideBar}>
        <GridItem area="main" px={2} overflowX="hidden">
          <Box
            ml={{ base: 2, md: 10 }}
            mr={{ base: 2, md: 0 }}
            mb={{ base: 4, md: 1 }}
            mt={{ base: 2, md: 0 }}
            width="100%"
            maxWidth="100%"
          >
            <Box mb={2}>
              <GameHeading />
            </Box>
            <HStack width="100%" flexWrap="wrap" gridGap={{ base: 2, md: 5 }}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GridGame />
        </GridItem>
      </Show>
    </Grid>
  );
};
