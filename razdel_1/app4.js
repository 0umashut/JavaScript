p = document.createElement('p');
document.body.after(p);

function ucFirst(a) {

	let str = a.charAt(0).toUpperCase() + a.slice(1);
	
	return(str);
}

function work() {

	let inp = document.getElementById('in').value;

	p.innerHTML = "Текст после изменения: " + ucFirst(inp);
}