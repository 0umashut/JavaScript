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
		if( a1 != (15, 89) ) {

			document.body.append(res);
			res.innerHTML = "Да";
		}
		else {

			document.body.append(res);
			res.innerHTML = "Нет";
		}
	}

}

function without() {


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