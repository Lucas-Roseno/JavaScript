/**
 *Aula 195
.filter é muito utilizado para obiviamente filtrar algum array.
Recebe 2 parâmetros, uma função (que pode ter as entradas tradicionais e tem que ter um return true 
or false), e o this.value, que normalmente é utilizado como o filtro e comumente recebido como um obj
O filter verifica a condição para cada elemento do array e se o teste realizado for true ele adiciona
o elemento ao novo array. No final da execução ele retorna o array com os itens que passaram no teste
 */

// const usuarios = [
//     {nome: 'Lucas', idade: "21"},
//     {nome: 'Joana', idade: "15"},
//     {nome: 'Maria', idade: "14"}
// ]

// function verificarMaioridade (item, i, array) {
     
//     return item.idade >= this.filtro ? true : false
// }
// const filtro = {
//     filtro: 18
// }
// novoArray = usuarios.filter(verificarMaioridade, filtro)
// console.log(novoArray)
// console.log(usuarios)




const carros = [
    {nome: 'Gol', marca:'volkswagem'},
    {nome: 'ix35', marca:'hyundai'},
    {nome: 'Santa fé', marca:'hyundai'},
    {nome: 'Polo', marca:'volkswagem'}
]

// Jeito verboso de resolver
// function filtrarHyundau(item) {
//     return item.marca == 'hyundai' ? true : false
// }

// const novoArray = carros.filter(filtrarHyundau)

const novoArray = carros.filter(
    carro => carro.marca == 'hyundai'
)
console.log(novoArray)