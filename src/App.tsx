import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import { GridGame } from "./components/project/Games/GridGame";
import Navbar from "./components/project/Navbars/Navbar";
import { GenreList } from "./components/project/Genres/GenreList";
import { GameHeading } from "./components/project/Games/GameHeading";
import { SortSelector } from "./components/project/Games/GamePlatforms/SortSelector";
import { PlatformSelector } from "./components/project/Games/GamePlatforms/PlatformSelector";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show when={showAside}>
        <GridItem area="aside" p={4}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" p={4}>
        <VStack ml={{ base: 4, md: 10 }} align="start" spaceY={2}>
          <GameHeading />
          <HStack spaceX={{ base: 2, md: 5 }}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </VStack>
        <GridGame />
      </GridItem>
    </Grid>
  );
}

export default App;
