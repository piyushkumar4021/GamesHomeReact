import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import config from "../config.json";
import http from "../services/http-service";

const useData = (endpoint, genre, platform) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const AxiosRequestConfig = {
      signal: controller.signal,
      params: {
        genres: genre,
        parent_platforms: platform,
      },
    };

    setData([]);
    setLoading(true);
    apiClient
      .get(`${config.apiUrl}${endpoint}`, AxiosRequestConfig)
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
  }, [genre, platform]);

  return { data, error, isLoading };
};

export default useData;
