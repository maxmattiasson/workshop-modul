export function convert(celsius, unit) {
  if (unit === "C") return (celsius * 9) / 5 + 32;
  if (unit === "F") return ((celsius - 32) * 5) / 9;
}
