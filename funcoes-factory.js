//Funções factory -> retornam um objeto

const ProdutoFactory = function(nome, preco) {
    
    // fazer alguma validação aqui
    
    return{
        nome,
        preco,

        mostrarNome(){
            console.log("O nome é: " + nome)
        }
    }
}

const objeto = ProdutoFactory('carro', 1500)
console.log(objeto)
objeto.mostrarNome()