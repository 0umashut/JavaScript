const p = document.createElement('p');
document.body.append(p);

const extract = () => {
	let currency = document.getElementById('currency').value;
	for (let i = 0; i < currency.length; i++) { 
		if(currency.charAt(i) === "$") {
			p.innerHTML = "Сумма = " + extractCurrencyValue(currency, i);
		}
	}
}

const extractCurrencyValue = (str, exclamation) => {
	return str.slice(0, exclamation) + str.slice(exclamation + 1);
}