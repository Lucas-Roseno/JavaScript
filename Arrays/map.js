/*
Aula 194
Funções map normalmente servem para fazer uma conversão e semprem retornam o obj onvertido
No parametro da função map passa-se alguma função que faz a conversão e ela deve fazer o retorno
A map vai rodar essa função para cada elemento de um array

 */

const produtosDolar = [
    {produto: "Notebook", preco: 1200, moeda: '$'},
    {produto: "Celular", preco: 800, moeda: '$'}
]

const converteDollar = function (item) {
    return {produto: item.produto, preco: item.preco * 5, moeda: 'R$'}
}

novoArray = produtosDolar.map(converteDollar)

console.log(produtosDolar)
console.log(novoArray)