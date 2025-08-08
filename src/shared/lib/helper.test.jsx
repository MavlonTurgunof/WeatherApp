import { describe, it, expect } from "vitest";
import { formatTemp, formatDate, capitalizeWords } from "./helper";

describe("helper", () => {
  it("formats temperature correctly", () => {
    expect(formatTemp(25.6)).toBe("26°C");
    expect(formatTemp(20)).toBe("20°C");
    expect(formatTemp(null)).toBe("");
  });

  it("formats date correctly", () => {
    expect(formatDate("2025-08-09")).toMatch(
      /Saturday, Aug 9|Saturday, Aug 09/
    );
    expect(formatDate("")).toBe("");
  });

  it("capitalizes words correctly", () => {
    expect(capitalizeWords("clear sky")).toBe("Clear Sky");
    expect(capitalizeWords("light rain showers")).toBe("Light Rain Showers");
    expect(capitalizeWords("")).toBe("");
  });
});
