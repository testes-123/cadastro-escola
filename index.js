const prompt = require("prompt-sync")()

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
    console.log(`Aluno ${nome} cadastrado com sucesso!\n`)
}

function listarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.\n")
    } else {
        console.log("Lista de alunos:")
        for (let i = 0; i < alunos.length; i++) {
            console.log(`${i + 1}. ${alunos[i].nome} - ${alunos[i].idade} anos - Série: ${alunos[i].serie}`)
        }
        console.log()
    }
}

const ordenarAlunosPorNome = () => {
    alunos.sort((a, b) => {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1
        return 0
    })
    console.log("Alunos ordenados por nome!\n")
}

function buscarAluno() {
    let nomeBusca = prompt("Digite o nome do aluno para buscar: ")
    let encontrado = alunos.find(aluno => aluno.nome.toLowerCase() === nomeBusca.toLowerCase())

    if (encontrado) {
        console.log(`Aluno encontrado: ${encontrado.nome} - ${encontrado.idade} anos - Série: ${encontrado.serie}\n`)
    } else {
        console.log("Aluno não encontrado.\n")
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

        console.log("Dados do aluno atualizados com sucesso!\n")
    } else {
        console.log("Aluno não encontrado.\n")
    }
}

let opcao = 0
while (opcao !== 6) {
    console.log("===== Sistema de Cadastro de Escola =====")
    console.log("1. Cadastrar aluno")
    console.log("2. Listar alunos")
    console.log("3. Ordenar alunos por nome")
    console.log("4. Buscar aluno")
    console.log("5. Alterar dados de aluno")
    console.log("6. Sair")

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
            console.log("Saindo do sistema...")
            break
        default:
            console.log("Opção inválida! Tente novamente.\n")
    }
}