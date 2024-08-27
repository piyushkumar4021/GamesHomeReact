import { useState } from "react";
import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList
            selectedGenre={selectedGenre}
            handleGenreSelect={setSelectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingLeft={7}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            handlePlatformSelect={setSelectedPlatform}
          />
          <SortSelector
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform?.id}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
