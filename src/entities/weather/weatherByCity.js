import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../shared/api/axiosInstance";

export function useCurrentWeatherByCity(city) {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: async () => {
      const { data } = await axiosInstance.get("weather", {
        params: { q: city },
      });
      return data;
    },
    enabled: !!city,
  });
}
