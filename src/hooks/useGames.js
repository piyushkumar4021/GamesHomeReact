import useData from "./useData";

const useGames = (genre) => useData("/games", genre);

export default useGames;
