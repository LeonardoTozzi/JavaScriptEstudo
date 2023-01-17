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
        const novaVaga = { nome, descricao, dataLimite, canditados: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }

}