const javaScriptConfirm = (name) => {
	if (confirm(`Привет ${name}, знаешь ли ты JavaScript?`)) {
		return 1;
	}
}

const launch = () => {
	if (javaScriptConfirm(prompt("Как тебя зовут?", "")) === 1) {
		alert("Молодец");
	} else {
		alert("Можешь начать изучение прямо сейчас");
	}
}