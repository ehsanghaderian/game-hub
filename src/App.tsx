import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import { GridGame } from "./components/project/GridGame";
import Navbar from "./components/project/Navbar";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>

      <Show when={showAside}>
        <GridItem area="aside" p={4}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" p={4}>
        <GridGame></GridGame>
      </GridItem>
    </Grid>
  );
}

export default App;
