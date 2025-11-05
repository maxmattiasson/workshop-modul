// export function convert() {
//   console.log("Page loaded and script initialized.");

//   const pountInput = document.getElementById("pount-input");
//   const kgInput = document.getElementById("kg-input");
// }

export function convertPnd(pnd) {
  let pounds = pnd;
  let kg = pnd * 0.45359237;
  console.log(pnd + " Pounds motsvarar " + kg + " Kg.");
}

export function convert(kg) {
  return kg * 2.20462262;
}
