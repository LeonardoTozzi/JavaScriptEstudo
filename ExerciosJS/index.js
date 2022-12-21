const nome = prompt("Digita seu nome")
const sobrenome = prompt("Digita seu sobrenome")
const cames = prompt("Digita seu Campus de estudo")
const ano = prompt("Digita o ano de nascimento")

alert(
    "Recruta cadastrado com sucesso!!\n" + // \n utilizado para pular linha.
    "\nNome: " + nome + " " + sobrenome + 
    "\nCampus de estudo: " + cames +
    "\nIdade: " + (2022- ano)
    )