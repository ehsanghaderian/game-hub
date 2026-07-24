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

export const HomePage = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });

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
      <Show when={showAside}>
        <GridItem area="aside" p={4}>
          <GenreList />
        </GridItem>
      </Show>

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
    </Grid>
  );
};
