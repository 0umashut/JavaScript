p = document.createElement('p');
document.body.append(p);

function extract() {

	let ind = document.getElementById('curr').value;

	if(Number.isInteger( parseInt( ind.charAt(0) ) ))
		p.innerHTML = "Ошибка, введенный формат не соответствует требуемому"
	else
		p.innerHTML = "Сумма = " + extractCurrencyValue(ind);
}

function extractCurrencyValue(str) {

	return( parseInt( str.slice(1) ) );
}