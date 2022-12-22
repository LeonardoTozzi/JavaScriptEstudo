const nomeAtacante = prompt("Digite o nome do personagem de ataque:")
const poderDeAtaque = prompt("Digite o poder de ataque:")

const nomeDefensor = prompt("Digite o nome do defensor:")
let vida = prompt("Digite quanto de vida tem o defensor:")
const poderDeDefesa = prompt("Qual é o seu poder de defesa:")
const escudo = prompt("Informe se seu personagem tem escudo: (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

vida -= danoCausado

alert(nomeAtacante + " causou " + danoCausado + " pontos de dano em " + nomeDefensor)
alert(
    nomeAtacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + nomeDefensor + "\nPontos de vida: " + vida + "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)
