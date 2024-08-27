import useData from "./useData";

const useGames = (gameQuery) => useData("/games", gameQuery);

export default useGames;
