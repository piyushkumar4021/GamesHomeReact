import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import config from "../config.json";
import http from "../services/http-service";

const useData = (endpoint, genre = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const AxiosRequstConfig = {
      signal: controller.signal,
      params: {
        genres: genre,
      },
    };

    setData([]);
    setLoading(true);
    apiClient
      .get(`${config.apiUrl}${endpoint}`, AxiosRequstConfig)
      .then(({ data }) => {
        setLoading(false);
        setData(data.results);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof http.CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [genre, endpoint]);

  return { data, error, isLoading };
};

export default useData;
