const lista = ["Jamilton", "Ana", "Marcela", "Pedro"]
/*
forEach, serve para chamar uma função para cada elemento de um array
A função que é chamada geralmente tem três parâmetros: (valorItemAtual, índice, arrayCompleto)
for(indice in lista){
  console.log(lista[indice])
}

const percorrer = function(item,i,arr){
  console.log(item)
}

lista.forEach(percorrer)
*/
Array.prototype.percorrer = function(funcao){
  //console.log(this)
  for(let i=0; i < this.length; i++){
    //console.log("teste")
    funcao(this[i],i,this)
  }
}
const funcao = function(item){
  console.log(item)
}
lista.percorrer(funcao)










