// useGeolocation.js
import { useEffect, useState } from "react";

export function useGeolocation(shouldFetch = true) {
  const [coords, setCoords] = useState(() => {
    const saved = localStorage.getItem("coords");
    return saved ? JSON.parse(saved) : { lat: null, lon: null };
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!shouldFetch || coords.lat) return;

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const position = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };
        setCoords(position);
        localStorage.setItem("coords", JSON.stringify(position));
      },
      (err) => {
        setError(err.message);
      }
    );
  }, [shouldFetch, coords.lat]);

  return { ...coords, error };
}
