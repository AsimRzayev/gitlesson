let myHeaders = new Headers();
myHeaders.append("apikey", "1OnORKzwWLUrHgC0g1TrLM5joI7du1Jo");

let requestOptions = {
	method: "GET",
	redirect: "follow",
	headers: myHeaders,
};

export function getCurrencyList(fn) {
	fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
		.then(resp => resp.json())
		.then(data => fn(data.symbols));
}

export function convertCurrency(from, to, amount, convertFn) {
	fetch(
		`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
		requestOptions
	)
		.then(resp => resp.json())
		.then(data => convertFn(data.result));
}
