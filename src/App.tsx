import {
  Box,
  Grid,
  GridItem,
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

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
            selectedGenre={selectedGenre}
            on_Click={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main" p={4}>
        <Box ml={10}>
          {" "}
          {/* Add margin bottom for spacing */}
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            on_Click={(platform) => setSelectedPlatform(platform)}
          />
        </Box>
        <GridGame
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        ></GridGame>
      </GridItem>
    </Grid>
  );
}

export default App;
