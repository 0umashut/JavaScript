let i = 0;

let chk = document.createElement('p');

function dividers(ch) {

	let a = parseInt(ch);
	let b = 0;
	let k = "";

	if (i != 0)
		for (; 1 <= i; i--) {

			k = "p" + i;
			document.getElementById(k).remove();
		}

	for (b = 1; b <= a; b++) {

		if ( (a % b) == 0) {

			i++;

			k = "p" + i;

			console.log(b);

			k = document.createElement('p');

			document.body.append(k);
			k.id = "p" + i;
			k.innerHTML = "Делитель №" + i + " = " + b;
		}
	}
	document.body.append(chk);
	chk.innerHTML = "Проверьте консоль"
}