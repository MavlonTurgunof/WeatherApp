import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../shared/api/axiosInstance";

export function useForecastByCity(city) {
  return useQuery({
    queryKey: ["forecast", city],
    queryFn: async () => {
      const { data } = await axiosInstance.get("forecast", {
        params: { q: city },
      });
      return data;
    },
    enabled: !!city,
  });
}
