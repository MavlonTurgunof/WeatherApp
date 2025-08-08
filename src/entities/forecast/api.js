import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../shared/api/axiosInstance";

export function useForecastByCoords(lat, lon) {
  return useQuery({
    queryKey: ["forecast", lat, lon],
    queryFn: async () => {
      const { data } = await axiosInstance.get("forecast", {
        params: { lat, lon },
      });
      return data;
    },
    enabled: !!lat && !!lon,
  });
}
