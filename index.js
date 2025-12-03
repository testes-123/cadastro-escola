let alunos = []

function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno: ")
    let idade = parseInt(prompt("Digite a idade do aluno: "))
    let serie = prompt("Digite a série do aluno: ")

    let aluno = {
        nome: nome,
        idade: idade,
        serie: serie
    }

    alunos.push(aluno)
    alert(`Aluno ${nome} cadastrado com sucesso!\n`)
}

function listarAlunos() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.\n")
    } else {
        let lista = "Lista de alunos:\n"
        for (let i = 0; i < alunos.length; i++) {
            lista += `${i + 1}. ${alunos[i].nome} - ${alunos[i].idade} anos - Série: ${alunos[i].serie}\n`
        }
        alert(lista)
    }
}

const ordenarAlunosPorNome = () => {
    alunos.sort((a, b) => {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1
        return 0
    })
    alert("Alunos ordenados por nome!\n")
}

function buscarAluno() {
    let nomeBusca = prompt("Digite o nome do aluno para buscar: ")
    let encontrado = alunos.find(aluno => aluno.nome.toLowerCase() === nomeBusca.toLowerCase())

    if (encontrado) {
        alert(`Aluno encontrado: ${encontrado.nome} - ${encontrado.idade} anos - Série: ${encontrado.serie}\n`)
    } else {
        alert("Aluno não encontrado.\n")
    }
}

function alterarAluno() {
    let nomeBusca = prompt("Digite o nome do aluno que deseja alterar: ")
    let aluno = alunos.find(aluno => aluno.nome.toLowerCase() === nomeBusca.toLowerCase())

    if (aluno) {
        let novoNome = prompt(`Digite o novo nome de ${aluno.nome} (ou enter para manter): `)
        let novaIdade = prompt(`Digite a nova idade de ${aluno.nome} (ou enter para manter): `)
        let novaSerie = prompt(`Digite a nova série de ${aluno.nome} (ou enter para manter): `)

        if (novoNome) aluno.nome = novoNome
        if (novaIdade) aluno.idade = parseInt(novaIdade)
        if (novaSerie) aluno.serie = novaSerie

        alert("Dados do aluno atualizados com sucesso!\n")
    } else {
        alert("Aluno não encontrado.\n")
    }
}

let opcao = 0
while (opcao !== 6) {
    alert("===== Sistema de Cadastro de Escola =====\n1. Cadastrar aluno\n2. Listar alunos\n3. Ordenar alunos por nome\n4. Buscar aluno\n5. Alterar dados de aluno\n6. Sair")

    opcao = parseInt(prompt("Escolha uma opção: "))

    switch (opcao) {
        case 1:
            cadastrarAluno()
            break
        case 2:
            listarAlunos()
            break
        case 3:
            ordenarAlunosPorNome()
            break
        case 4:
            buscarAluno()
            break
        case 5:
            alterarAluno()
            break
        case 6:
            alert("Saindo do sistema...")
            break
        default:
            alert("Opção inválida! Tente novamente.\n")
    }
}
