import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../shared/api/axiosInstance";

export function useCurrentWeatherByCoords(lat, lon) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => {
      const { data } = await axiosInstance.get("weather", {
        params: { lat, lon },
      });
      return data;
    },
    enabled: !!lat && !!lon, // Don't run until we have coordinates
  });
}
