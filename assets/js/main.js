import { getCurrencyList, convertCurrency } from "./request.js";

let currencyList = document.getElementsByClassName("currencyList");

let fromInput = document.getElementById("fromInput");
let toInput = document.getElementById("toInput");

function ShowResult(amount) {
	toInput.value = amount;
}
function ShowResult2(amount) {
	fromInput.value = amount;
}

for (const currencySelect of currencyList) {
	currencySelect.addEventListener("change", () => {
		let from = currencyList[0].value;
		let to = currencyList[1].value;
		let amount = fromInput.value;
		if (from && to && amount) {
			convertCurrency(from, to, amount, ShowResult);
		}
	});
}

fromInput.addEventListener("keyup", function () {
	let from = currencyList[0].value;
	let to = currencyList[1].value;
	let amount = fromInput.value;
	if (from && to && amount) {
		convertCurrency(from, to, amount, ShowResult);
	}
});

toInput.addEventListener("keyup", function () {
	let from = currencyList[1].value;
	let to = currencyList[0].value;
	let amount = toInput.value;
	if (from && to && amount) {
		convertCurrency(from, to, amount, ShowResult2);
	}
});

function ShowList(data) {
	let symbolsArr = Object.entries(data);
	symbolsArr.map(symbolArr => {
		currencyList[0].innerHTML += `
        <option value=${symbolArr[0]}>${symbolArr[1]}</option>`;
		currencyList[1].innerHTML += `
        <option value=${symbolArr[0]}>${symbolArr[1]}</option>`;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getCurrencyList(ShowList);
});
