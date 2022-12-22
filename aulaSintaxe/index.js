const idade = prompt("Informe a sua idade: ")

if (idade > 18) {
    alert("Você é maior de idade!")
} else if (idade > 12 ) {
    alert("Você é menor de idade!")
} else if (idade > 4) {
    alert("Você é criança")
} else {
    alert("..")
}

/* FORMA DE SIMPLIFICAR A SINTAXE
 const resultado = (6 === 6) ? "Verdadeiro" : "Falso" */