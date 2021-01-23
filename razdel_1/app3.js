const p = document.createElement('p');
document.body.after(p);
let min = 0;
let max = 0;

const minMax = () => {
	let a = Number(document.getElementById('a').value);
	let b = Number(document.getElementById('b').value);
	let c = Number(document.getElementById('c').value);

	a < b ? a < c ? min = a : min = c : b < c ? min = b : min = c;
	a > b ? a > c ? max = a : max = c : b > c ? max = b : max = c;
	
	return `Наибольшее число из a, b, и c - ${max}, наименьшее - ${min}`;
}

const show = () => {
	p.innerHTML = minMax();
}