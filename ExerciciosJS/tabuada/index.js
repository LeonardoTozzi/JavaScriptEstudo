const numero = prompt("Digite um número:")

let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert ("Resultado da tabuada de " + numero + ":\n\n" + resultado)


