const subtrai = function (a, b) {
    return a - b;
}
let resultado = subtrai(2, 1);
console.log(resultado);

const testaZero = (a) => a ? "A variável não é zero" : "A variável é zero";

let resultado2 = testaZero(0);
console.log(resultado2);

function testaSinal(a, b) {
    const func = function (a, b) {
        return subtrai(a, b);
    }
    let resultado3 = func(a, b);

    if (testaZero(resultado3) === "A variável é zero") {
        console.log("É zero")
    } else if (a < 0 && b < 0 || a > 0 && b > 0) {
        console.log("Mesmo sinal")
    } else {
        console.log("Sinais diferentes")
    }
}
testaSinal(2, 4)

console.log("fim");