const p = document.createElement('p');
const username = "user";
const password = "qwerty";

const checkUsername = (usernameToCheck) => {
	if (!usernameToCheck) {
		return -2;
	}
	if (usernameToCheck === username) {
		return 1;
	} else {
		return 0;
	}
}

const checkPassword = (passwordToCheck) => {
	if (!passwordToCheck) {
		return -2;
	}
	if (passwordToCheck === password) {
		return 1;
	} else {
		return 0;
	}
}

const checkMain = () => {
	document.body.append(p);
	let enteredUsername = document.getElementById('user').value;
	let enteredPassword = document.getElementById('pass').value;
	let checker = checkUsername(enteredUsername) + checkPassword(enteredPassword);

	switch (checker) {
		case 2:
			p.innerHTML = "Привет";
			break;
		case 1:
			p.innerHTML = "Что-то введено неправильно";
			break;
		case 0:
			p.innerHTML = "Все введено неправильно";
			break;
		default:
			p.innerHTML = "Unexpected Error";
			break;
	}
}