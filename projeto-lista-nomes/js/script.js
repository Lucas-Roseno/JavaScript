let nomes = [
    'Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Julia'
]

function carregarNomes() {
    
    let itensLista = ``
    for (const key in nomes) {
        
        itensLista += `<li class="list-group-item">${nomes[key]}</li>`    
    }
    document.getElementById('lista-nomes').innerHTML = itensLista
}

function pesquisarNome() {
    let nomePesquisa = document.getElementById('nome-pesquisa').value
    
    for (const key in nomes) {
        if (nomes[key] == nomePesquisa) {
            let nomeEncontrado = `<li class="list-group-item">${nomes[key]}</li>`
            document.getElementById('lista-nomes').innerHTML = nomeEncontrado
            return
        }
    }

    // Caso não seja encontrado:
    document.getElementById('lista-nomes').innerHTML = `
        <li class="list-group-item">
            ${"Nome não encontrado"}
        </li>
    `
}