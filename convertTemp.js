export function convert(celsius, unit) {
  if (unit === "C") return Math.round((celsius * 9) / 5 + 32);
  if (unit === "F") return Math.round(((celsius - 32) * 5) / 9);
}
