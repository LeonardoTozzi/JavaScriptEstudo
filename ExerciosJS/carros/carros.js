
const nomeone = prompt("Digite o nome do 1º piloto: ")
const veloone = prompt("Digite a velocidade do carro do" + " " + nomeone + ":")

const nometwo = prompt("Digite o nome do 2º piloto: ")
const velotwo = prompt("Digite a velocidade do carro do" + " " + nometwo + ":")

const carroone = parseFloat(veloone)
const carrotwo = parseFloat(velotwo)


if (carroone > carrotwo) {
    alert("Carro do" + " " + nomeone + " é mais rapido que o carro do" + " " + nometwo)
} else if (carrotwo > carroone){
    alert("Carro do" + " " + nometwo + " é mais rapido que o carro do" + " " + nomeone )
} else {
    alert("O carro do " + nomeone + " e o carro do " + nometwo + " estão na mesma velocidade!" ) 
} 