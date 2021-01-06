p = document.createElement('p');

function fun(chr) {

			document.body.append(p);
			switch(chr) {
				case "0":
					p.innerHTML = "Ноль";
				break;
				case "1":
					p.innerHTML = "Один";
				break;
				case "2":
					p.innerHTML = "Два";
				break;
				case "3":
					p.innerHTML = "Три";
				break;
				case "4":
					p.innerHTML = "Четыре";
				break;
				case "5":
					p.innerHTML = "Пять";
				break;
				case "6":
					p.innerHTML = "Шесть";
				break;
				case "7":
					p.innerHTML = "Семь";
				break;
				case "8":
					p.innerHTML = "Восемь";
				break;
				case "9":
					p.innerHTML = "Девять";
				break;
			}
		}