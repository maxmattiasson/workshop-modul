import { convert as convertTemp } from "./convertTemp.js";
import { convert as convertPounds } from "./moduleConvertPounds.js";
import { convert as convertCm } from "./convertMeasure.js";

document.querySelector("#celcius-btn").addEventListener("click", () => {
  const input = document.querySelector("#input-celsius").value;
  document.querySelector(
    "#temp-svar"
  ).textContent = `${input} grader celcius motsvarar ${convertTemp(
    input
  )} grader fahrenheit`;
});
console.log(convertTemp(20));
convertPounds(150);
