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
import { useState } from "react";
import type { Genre } from "./Hooks/UseGenres";
import type { Platform } from "./Hooks/UsePlatforms";
import { GameHeading } from "./components/project/Games/GameHeading";
import { SortSelector } from "./components/project/Games/GamePlatforms/SortSelector";
import { PlatformSelector } from "./components/project/Games/GamePlatforms/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string | null;
  searchText: string | null;
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
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          on_submit={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        ></Navbar>
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
        <VStack ml={{ base: 4, md: 10 }} align="start" spaceY={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spaceX={{ base: 2, md: 5 }}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              on_Click={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              on_Click={(sort: string) => setGameQuery({ ...gameQuery, sort })}
              selectedSort={gameQuery.sort}
            />
          </HStack>
        </VStack>
        <GridGame gameQuery={gameQuery}></GridGame>
      </GridItem>
    </Grid>
  );
}

export default App;
