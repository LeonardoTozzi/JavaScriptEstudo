 const arr = ["Frodo", "Sam", "Marry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
 console.log(arr)

 // Adicionar elementos no final com a função PUSH
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// Adicionar elemtnos no começo com a função UNSHIFT
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover elementos com a função POP

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Remover o primeiro elemento com a função SHIFT
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento com a função INCLUDES
const inclui = arr.includes("Gandalf")
console.log(inclui) // inclui é boolean (verdadeito or falso)

// Para saber o indice de um elemento utiliza a função INDEXOF
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Para cortar utiliza a função SLICE
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(ourtos)

