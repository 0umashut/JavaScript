// Функции

function sumeven(a, b) {
	let i = 0;
	let c = 0;

	for (i = a; i <= b; i++) {
		if (i % 2 == 0) 
			c += i;
	}
	return(c);
}

// Выборка

let nomer = prompt("Введите номер задания ([номер раздела].[номер задания])", '');

switch(nomer) {

// Первый номер
	case "1.1": {

		let a = prompt("Введите любую цифру", '');

		let n = parseInt(a);

		switch(n) {
			case 0:
				alert("Ноль");
				break;
			case 1:
				alert("Один");
				break;
			case 2:
				alert("Два");
				break;
			case 3:
				alert("Три");
				break;
			case 4:
				alert("Четыре");
				break;
			case 5:
				alert("Пять");
				break;
			case 6:
				alert("Шесть");
				break;
			case 7:
				alert("Семь");
				break;
			case 8:
				alert("Восемь");
				break;
			case 9:
				alert("Девять");
				break;
		}
	}
		break;

// Второй номер

	case "1.2": {

		let a1 = prompt("Введите натуральное число a <= b", '');
		let a = parseInt(a1); 

		let b1 = prompt("Введите натуральное число b >= a", '');
		let b = parseInt(b1);

		alert(`Сумма всех четных чисел в интервале [${a},${b}] = ${sumeven(a, b)}`);

	}
}

