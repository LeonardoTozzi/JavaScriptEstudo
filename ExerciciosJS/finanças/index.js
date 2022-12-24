let saldo = prompt("Informe a quantidade de dinheiro inical:")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo disonível: R$ " + saldo +
        "\n1. Adicionar dinheiro" +
        "\n2. Romover dinheiro" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat (prompt("Informe o valor a ser adicionado:"))
            break
        case "2":
            saldo -= prompt("Informe o valor a ser removido:")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida!")
    }

} while (opcao !== "3")