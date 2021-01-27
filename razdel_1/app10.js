let i = 0;
let resultIterator = 0;
const checkConsole = document.createElement('p');

const divisors = (numberToGetDividersFrom) => {
	const number = Number(numberToGetDividersFrom);
	let resultId = "";

	if (resultIterator != 0) {
		for (; 1 <= resultIterator; resultIterator--) {
			resultId = "result" + resultIterator;
			document.getElementById(resultId).remove();
		}
	}

	for (i = 1; i <= number; i++) {
		if ((number % i) === 0) {
			resultId = "result" + i;
			console.log(i);
			resultId = document.createElement('p');
			document.body.append(resultId);
			resultId.id = "result" + ++resultIterator;
			resultId.innerHTML = "Делитель №" + resultIterator + " = " + i;
		}
	}

	document.body.append(checkConsole);
	checkConsole.innerHTML = "Проверьте консоль";
	console.log(i);
}