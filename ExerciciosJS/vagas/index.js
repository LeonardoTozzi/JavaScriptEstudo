const vagas = []


function listarVagas() {
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        // 1, nome, quantidade de candidato
        textoFinal += indice + ". "
        textoFinal += vagas.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}


function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" + 
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }

}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    if (indice >= vagas.length || indice < 0){
        alert("Indíce Inválido")
        return
    }
    const vaga = vagas[indice]

    const candidatoEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato  
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice de vaga para qual o(a) candidato(a) deseja se inscrever?")
    const vaga = vagas [indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição reazlizada.")
    }
}

function excluirVaga() {
    const indice = pormpt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
    
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome:"  + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite 
     )

     if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
     }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponíveis" + 
        "\n2. Criar uma nova vaga" + 
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair" 

    )
    return opcao 
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                default:
                    alert("Opção inválida.")
        }
    } while (opcao !== "6")
}

executar()