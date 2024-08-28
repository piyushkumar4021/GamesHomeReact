import { useState } from "react";
import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState({
    genre: null,
    platform: null,
    order: null,
  });

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
      maxWidth="1400px"
      margin={"auto"}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList
            genre={gameQuery.genre}
            handleGenreChange={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Stack
          paddingX={7}
          direction={{
            base: "column",
            sm: "row",
          }}
        >
          <PlatformSelector
            platform={gameQuery.platform}
            handlePlatformChange={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            order={gameQuery.order}
            handleOrderChange={(order) => setGameQuery({ ...gameQuery, order })}
          />
        </Stack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
