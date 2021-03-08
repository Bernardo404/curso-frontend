const subtrai = function (a, b) {
    return a - b;
}

const testaZero = (a) => a ? "A variável não é zero" : "A variável é zero";

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