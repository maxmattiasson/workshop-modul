import { convert as convertTemp } from "./convertTemp.js";
import { convert as convertWeight } from "./moduleConvertPounds.js";
import { convert as convertCm } from "./convertMeasure.js";

document.querySelector("#celcius-btn").addEventListener("click", () => {
  const input = document.querySelector("#input-celsius").value;

  const unit = document.querySelector("#cels").checked ? "C" : "F";
  let toUnit = "C";
  if (unit === "C") {
    toUnit = "F";
  }

  document.querySelector(
    "#temp-svar"
  ).textContent = `${input} grader ${unit} motsvarar ${convertTemp(
    input,
    unit
  )} grader av ${toUnit} `;
});

const input = document.getElementById("cmInput");
const button = document.getElementById("measure-btn");
const result = document.getElementById("resultM");

button.addEventListener("click", () => {
  const cm = input.value;
  result.innerText = `${convertCm(cm)} m`;
});

document.querySelector("#pound-input").addEventListener("input", () => {
  const Kg = document.querySelector("#pound-input").value;
  document.querySelector(
    "#weight-kg"
  ).innerText = `Vikt i pounds: ${convertWeight(Kg)}`;
});
