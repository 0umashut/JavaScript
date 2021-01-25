const whatTypeOfNumber = (a) => {
	if (a > 0) {
		return 1;
	}
	if (a < 0) {
		return -1;
	}
	if (a == 0) {
		return 0;
	}
	if (!Number(a)) {
		return "Error!";
	}
}

const launch = () => {
	alert(whatTypeOfNumber(prompt('Введите число')));
}