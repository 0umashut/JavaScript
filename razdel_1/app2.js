const p = document.createElement('p');
document.body.append(p);

const sumParOfInterval = (a, b) => {
    let result = 0;

    if (a > b) {
        return "Ошибка, a > b";
    }

    if (a % 2 === 0) {
        for (let i = a; i <= b; i += 2) {
            result += i;
        }
    } else {
        for (let i = a + 1; i <= b; i += 2) {
            result += i;
        }
    }
    return `Сумма чисел в интервале [${a}, ${b}]  = ` + result;
}

const showResult = () => {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let finalResult = sumParOfInterval(a, b);
    p.innerHTML = finalResult;
    console.log(finalResult);
}