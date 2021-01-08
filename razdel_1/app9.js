function start() {

	let name = prompt("Как тебя зовут?", "");

	let conf = confirm(`Привет ${name}, знаешь ли ты JavaScript?`);

	if (conf == true)
		alert("Молодец")
	else
		alert("Можно начать изучения прямо сейчас");
}