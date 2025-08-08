import { renderHook, act } from "@testing-library/react";
import { WeatherProvider, useWeatherContext } from "./WeatherContext";

describe("WeatherContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves default city to context and localStorage", () => {
    const { result } = renderHook(() => useWeatherContext(), {
      wrapper: WeatherProvider,
    });

    act(() => {
      result.current.saveDefaultCity("Tashkent");
    });

    expect(result.current.city).toBe("Tashkent");
    expect(result.current.defaultCity).toBe("Tashkent");
    expect(localStorage.getItem("defaultCity")).toBe("Tashkent");
  });

  it("switches to current location mode when calling useCurrentLocation", () => {
    const { result } = renderHook(() => useWeatherContext(), {
      wrapper: WeatherProvider,
    });

    act(() => {
      result.current.saveDefaultCity("Tashkent");
    });
    act(() => {
      result.current.useCurrentLocation();
    });

    expect(result.current.city).toBe(null);
    expect(result.current.defaultCity).toBe("Tashkent"); // still saved
  });

  it("removes default city from context and localStorage", () => {
    const { result } = renderHook(() => useWeatherContext(), {
      wrapper: WeatherProvider,
    });

    act(() => {
      result.current.saveDefaultCity("Tashkent");
    });
    act(() => {
      result.current.removeDefaultCity();
    });

    expect(result.current.city).toBe(null);
    expect(result.current.defaultCity).toBe(null);
    expect(localStorage.getItem("defaultCity")).toBe(null);
  });
});
