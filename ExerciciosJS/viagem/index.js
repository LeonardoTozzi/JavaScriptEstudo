const nomeTurista = prompt("Qual o seu nome?")
let cidades = ""
let contagem = 0

let confirmar = prompt(nomeTurista + " você já visitou alguma cidade? (Sim/Não)")

while (confirmar === "Sim") {
    let cidade = prompt("Qual cidade você visitou?")
    cidades += " - " + cidade + "\n"
    contagem++ 
    confirmar = prompt("Você vsitou alguma outra cidade? (Sim/Não)")
}

alert("Turista: " + nomeTurista +
    "\nQuantidade de cidades visitadas: " + contagem + 
    "\nCidades visitadas:\n" + cidades)

















/*

Código que tentei fazer sozinho:

const nome = prompt("Qual o seu nome?")
let visita = prompt(nome + " já vistiou alguma cidade? (Sim/Não) ")

cidade = 0

while (visita === "Sim") {
    let cidade = prompt("Qual o nome da cidade?")
    cidade += 1
    
    if (visita === "Não"){
        break
        
    }
}

alert("Visitou;" +
"\n" + cidade
)*/