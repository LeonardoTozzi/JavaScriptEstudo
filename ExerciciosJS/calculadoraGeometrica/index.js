function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo: ")
    const altura = prompt("Informe a altura do trinângulo: ")
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo: ")
    const altura = prompt("Informe a altura do retângulo: ")
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = prompt("Informe o lado do quadrado: ")
    return lado * lado
}

function calcularAreaTrapeio() {
    const baseMaior = parseFloatprompt(("Informe a base maior do trapezio: "))
    const baseMenor = parseFloatprompt(("Informe a base menor do trapezio: "))
    const altura = prompt("Infome a altura do trapezio: ")
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do circulo: ")
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculdor Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de cícurlo\n" +
        "6. Sair\n"
    )
}


function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapeio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }

        if (resultado) {
            alert("Resultado: " + resultado)
             }
    } while (opcao !== "6")
}

executar ()