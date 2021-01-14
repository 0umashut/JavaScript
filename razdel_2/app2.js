let inp = document.createElement('input');
inp.type = "text";

function getdata(n) {

	a = parseInt(n);

	let klass = {};

	for (let i = 1; i <= a; i++){

		inp.id = "id" + i;
		inp.placeholder = "name";
		document.body.append(inp);

		document.getElementById("id" + i).onkeypress = function(k) {

			if (k.keyCode == 13) {

				klass[i] = {name: this.value};
				console.log("Имя ученика №" + i + " - " + klass[i].name);
			}
		}
	}
}