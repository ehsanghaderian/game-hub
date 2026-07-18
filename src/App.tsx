import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./App.css";
import { GridGame } from "./components/project/GridGame";
import Navbar from "./components/project/Navbar";
import { GenreList } from "./components/project/Genres/GenreList";
import { useState } from "react";
import type { Genre } from "./Hooks/UseGenres";
import { PlatformSelector } from "./components/project/GamePlatforms/PlatformSelector";
import type { Platform } from "./Hooks/UsePlatforms";
import { SortSelector } from "./components/project/GamePlatforms/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string | null;
}
function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>

      <Show when={showAside}>
        <GridItem area="aside" p={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            on_Click={(genre: Genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" p={4}>
        <HStack ml={10} spaceX={5}>
          {" "}
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            on_Click={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector
            on_Click={(sort: string) => setGameQuery({ ...gameQuery, sort })}
            selectedSort={gameQuery.sort}
          ></SortSelector>
        </HStack>
        <GridGame gameQuery={gameQuery}></GridGame>
      </GridItem>
    </Grid>
  );
}

export default App;
