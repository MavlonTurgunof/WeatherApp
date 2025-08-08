export function BackgroundImage(weather) {
  if (weather === "Clouds") return "url('/cloudyDay.jpg')";
  if (weather === "Clear") return "url('/SunnyDay.jpeg')";
  if (weather === "Rain") return "url('/rainyday.jpg')";
  if (weather === "Snow") return "url('/snowyday.jpeg')";
  return;
}
