import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import _ from "lodash";

function GameGrid({ gameQuery }) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletonCount = 9;

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        alignItems="start"
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={{ base: 4, xl: 6 }}
      >
        {isLoading &&
          _.range(skeletonCount).map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
export default GameGrid;
