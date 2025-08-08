export function formatTemp(temp) {
  if (typeof temp !== "number") return "";
  return `${Math.round(temp)}°C`;
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export function capitalizeWords(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function BackgroundImage(weather) {
  if (weather === "Clouds") return "url('/cloudyDay.jpg')";
  if (weather === "Clear") return "url('/SunnyDay.jpeg')";
  if (weather === "Rain") return "url('/rainyday.jpg')";
  if (weather === "Snow") return "url('/snowyday.jpeg')";
  return;
}
