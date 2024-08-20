import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import config from "../config.json";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get(config.apiUrl + "x/games")
      .then(({ data }) => setGames(data.results))
      .catch(({ message }) => setError(message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
export default GameGrid;
