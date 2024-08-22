import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={7} padding={7}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
export default GameGrid;
