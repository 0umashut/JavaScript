p = document.createElement('p');

function check() {

	document.body.append(p);

	let usr0 = "user";

	let pass0 = "qwerty";

	let usr = document.getElementById('usr').value;

	let pass = document.getElementById('pass').value;

	if (usr0 == usr)
		if (pass0 == pass)
			p.innerHTML = "Привет"
		else
			p.innerHTML = "Неправильный пароль"
	else
		if (pass0 == pass)
			p.innerHTML = "Неправильный username"
		else
			p.innerHTML = "Ошибка валидации"
}