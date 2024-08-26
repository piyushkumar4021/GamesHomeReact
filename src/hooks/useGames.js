import useData from "./useData";

const useGames = (genre, platform) => useData("/games", genre, platform);

export default useGames;
