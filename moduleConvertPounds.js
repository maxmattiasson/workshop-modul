function convert() {
    console.log("Page loaded and script initialized.");

	const pountInput = document.getElementById("pount-input");
	const kgInput = document.getElementById("kg-input");
}

export function convertPnd(pnd) {
    let pounds = pnd;
    let kg = pnd * 0.45359237;   
    console.log(pnd + " Pounds motsvarar " + kg + " Kg.");
}

export function convertKg(kg) {
    let pounds = kg * 2.20462262;
    console.log(kg + " Kg motsvarar " + pounds.toFixed(2) + " Pounds.");
}

initialize();