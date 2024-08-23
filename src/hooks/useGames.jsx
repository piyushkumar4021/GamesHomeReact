import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import config from "../config.json";
import http from "../services/http-service";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get(config.apiUrl + "/games", { signal: controller.signal })
      .then(({ data }) => {
        setLoading(false);
        setGames(data.results);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof http.CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
