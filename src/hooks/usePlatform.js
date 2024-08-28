import genres from "../data/genres";

const usePlatform = () => {
  return { data: genres, isLoading: false, error: null };
};

export default usePlatform;
