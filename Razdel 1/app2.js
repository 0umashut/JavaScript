p = document.createElement('p');
document.body.after(p);

function res() {

	let b1 = document.getElementById('b').value;
	let b = parseInt(b1);

	let a1 = document.getElementById('a').value;
	let a = parseInt(a1);

	if(a > b)
		p.innerHTML = "Ошибка, a > b";
	else {
		let c = 0;
		let i = 0;
		for (i = a; i <= b; i++) {
			if (i % 2 == 0) 
				c += i;
		}
		p.innerHTML = `Сумма четных чисел в интервале [${a}, ${b}] = ${c}`;
	}
}