let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha um das opções abaixos:" +
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Opção Cinco"
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolheu a opção 2")
            break
        case "3":
            alert("Você escolheu a opção 3")
            break
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu encerrar.")
            alert("Encerrando...")
            break
            default:
                alert("Opção inválida.")
    }

} while (opcao !== "5")





// let escolha = prompt("Escolha alguma opção:\n" +
// "1º Opção\n" +
// "2º Opção\n" +
// "3º Opção\n" +
// "4º Opção\n" +
// "5º Opção Encerrar\n" +
// )

