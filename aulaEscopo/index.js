let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal() {
    let animal = "Gato"
}

criarAnimal()
console.log(animal)

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true // VAR sempre vai funcionar em funções externas 
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        let situacao = "Reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    console.log(sitacao)
}

avaliarNota(83)
avaliarNota(49)

function ola() {
    var texto = "Olá, mundo!" // VAR nunca vai funcionar na conluna da FUNCTION apenas colunas como IF OR ELSE
}
console.log(texto)

 console.log(nome)
 console.log(sobrenome)

    var nome = "Leonardo"
    let sobrenome = "Tozzi"


 console.log(nome)
 console.log(sobrenome)