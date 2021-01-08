p = document.createElement('p');
document.body.append(p);

res = document.createElement('p');

ind = document.createElement('input');
ind.id = "in";
ind.type = "text";

function with1() {

	p.innerHTML = "Введите возраст"
	document.body.append(ind);

	document.getElementById("in").onchange = function() {

		let a1 = parseInt( document.getElementById("in").value );

		if( !(a1 <= 14) == true && !(a1 >= 90)) {

			document.body.append(res);
			res.innerHTML = "Возраст > 14 и < 90";
		}
		else {

			document.body.append(res);
			res.innerHTML = "Возраст < 14 или > 90";
		}
	}

}

function without() {

	p.innerHTML = "Введите возраст"
	document.body.append(ind);

	document.getElementById("in").onchange = function() {

		let a1 = parseInt( document.getElementById("in").value );

		if( (a1 > 14) && (a1 < 90)) {

			document.body.append(res);
			res.innerHTML = "Возраст > 14 и < 90";
		}
		else {

			document.body.append(res);
			res.innerHTML = "Возраст <= 14 или >= 90";
		}
	}
}

function selector(a) {

	switch(a) {
		case "1":
			with1();
		break;
		case "2":
			without();
		break;
	}
}