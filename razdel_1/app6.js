function fun() {

	let a1 = prompt("Введите число");
	let	a = parseInt(a1);

	if (a > 0)
		alert(1)
	else 
		if (a < 0)
			alert(-1)
		else 
			if (a == 0)
				alert(0)
			else
				alert("Error");
}