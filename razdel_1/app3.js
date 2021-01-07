let p = document.createElement('p');
document.body.after(p);

function minmax() {

	let a1 = document.getElementById('a').value;
	let a = parseInt(a1);

	let b1 = document.getElementById('b').value;
	let b = parseInt(b1);

	let c1 = document.getElementById('c').value;
	let c = parseInt(c1);

	p.innerHTML = "Наибольшее число - " + Math.max(a, b, c) + ", наименьшее - " + Math.min(a, b, c);
}