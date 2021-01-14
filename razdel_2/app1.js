function fun(a) {

	let b = parseInt( document.getElementById("num").value );

	let c = Array(b - 1);

	let m = new Map();

	let i = 0;

	let k = 1;

	switch(a) {
		case "1":

			i = 0;

			for (i = 0; i < b; i++)
				c[i] = Math.random() * (100 - 0) + 0;

			i = 0;

			while (i < b) {

				console.log("Элемент №" + (i + 1) + " = " + c[i++]);
			}
		break;
		case "2":

			i = 0;

			for (i = 0; i < b; i++)
				c[i] = Math.random() * (100 - 0) + 0;

			for (i in c)
				console.log("Элемент №" + k++ + " = " + c[i]);
		break;
		case "3":

			i = 0;

			for (i = 0; i < b; i++)
				c[i] = Math.random() * (100 - 0) + 0;

			k = 1;

			for (i of c)
				console.log("Элемент №" + k++ + " = " + i);
		break;
		case "4":

			i = 0;

			for (i = 0; i < b; i++)
				c[i] = Math.random() * (100 - 0) + 0;

			k, i = 0;
			c.forEach(function (){console.log("Элемент №" + (i + 1) + " = " + c[i++])});
		break;
		case "5":

			for (i = 0; i < b; i++)
				m.set(i, Math.random() * (100 - 0) + 0);

			for (i = 0; i < b; i++)
				console.log("Элемент №" + (i + 1) + " = " + m.get(i));
		break;
		case "6":


		break;
	}
}