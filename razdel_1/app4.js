const p = document.createElement('p');
document.body.append(p);

const ucFirst = (str) => {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

const work = () => {
	p.innerHTML = "Текст после изменения: " + ucFirst(document.getElementById('in').value);
}