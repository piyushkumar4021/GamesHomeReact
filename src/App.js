import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [genre, setGenre] = useState(null);

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
          <GenreList handleGenreSelect={(id) => setGenre(id)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid genre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
