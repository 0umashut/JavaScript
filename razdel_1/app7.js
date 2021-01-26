const p = document.createElement('p');
const result = document.createElement('p');
result.id = "result";
const input = document.createElement('input');
input.id = "in";
input.type = "text";
const minAge = 14;
const maxAge = 90;
const returnTrue = `Возраст > ${minAge} и < ${maxAge}`;
const returnFalse = `Возраст <= ${minAge} или >= ${maxAge}`;

const withNot = (age) => {
	return !((age <= minAge) && (age >= maxAge)) ? returnTrue : returnFalse;
}

const withoutNot = (age) => {
	if ((age > minAge) && (age < maxAge)) {
		return `Возраст > ${minAge} и < ${maxAge}`;
	} else {
		return `Возраст <= ${minAge} или >= ${maxAge}`;
	}
}

const choice = (option) => {
	document.body.append(p);
	p.innerHTML = "Введите возраст";
	document.body.append(input);
	document.body.append(result);
	let inputAge = Number(document.getElementById("in").value);
	document.getElementById("in").onchange = () => {
		switch(Number(option)) {
			case 1:
				result.innerHTML = withNot(inputAge);
				break;
			case 2:
				result.innerHTML = withoutNot(inputAge);
				break;
			default:
				result.innerHTML = "Error";
				break;
		}
	}
}