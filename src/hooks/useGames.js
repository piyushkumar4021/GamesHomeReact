import useData from "./useData";

const useGames = (genre, platform, order) =>
  useData("/games", genre, platform, order?.value);

export default useGames;
