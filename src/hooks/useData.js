import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import config from "../config.json";
import http from "../services/http-service";

const useData = (endpoint, genre, platform, order) => {
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
        ordering: order,
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
  }, [endpoint, genre, platform, order]);

  return { data, error, isLoading };
};

export default useData;
