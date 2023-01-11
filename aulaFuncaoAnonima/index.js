function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(4, 5))

operacao = function (a, b) {
    return a - b
}

console.lof(operacao(4, 5))


olaMundo()

function olaMundo() {
    console.log("Olá, mundo")
}

const oiMundo = function () {
    console.log("Oi, mundo")
}

oiMundo() // função anônima só passar a exister depois de serem declaradas primeiro