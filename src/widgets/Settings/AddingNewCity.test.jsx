import { render, screen, fireEvent } from "@testing-library/react";
import AddingNewCity from "./AddingNewCity";
import { WeatherProvider } from "../../shared/context/WeatherContext";

describe("AddingNewCity component", () => {
  it("saves default city when clicking Save", () => {
    render(
      <WeatherProvider>
        <AddingNewCity />
      </WeatherProvider>
    );

    const input = screen.getByPlaceholderText(/Add city/i);
    const button = screen.getByText(/Save/i);

    fireEvent.change(input, { target: { value: "Tashkent" } });
    fireEvent.click(button);

    expect(localStorage.getItem("defaultCity")).toBe("Tashkent");
    expect(screen.getByText(/Current default city/i)).toHaveTextContent(
      "Tashkent"
    );
  });
});
