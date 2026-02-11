// Objetos literais - melhorias
let nome = "Notebook"
let preco = 1200
/*
const produto = {
  nome,// nome: nome
  preco,
  exibirProduto(){
    console.log(`${this.nome}, ${this.preco}, ${this.categoria}`)
  }
}
*/

class Produto {
  constructor(){
    this.nome = "Notebook"
    this.preco = 1200
  }
}

const produto = new Produto()
const produto2 = new Produto()

/*
Se uma variável apontar para um objeto, é como se os dois estivessem apontando para o 
mesmo endereço de memória, uma alteração em um ou no outro reflete nos dois
*/

const pro = produto
pro.preco = 2000
produto.preco = 3000

console.log(pro.preco)
console.log(produto.preco)

/*
produto.categoria = "Eletrônicos"
produto.exibirPreco = function(){
  console.log(`Preço: ${this.preco}`)
}

produto.nome = "Notebook"
produto.exibirPreco()
//produto.exibirProduto()
//console.log( produto.categoria )
/*
produto.exibirProduto()
console.log( produto.nome )
*/
