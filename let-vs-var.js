// Var vs Let (Escopo)
/*
var -> Escopo global, função
let -> Escopo global, função, bloco
*/
//let numero = 10 //global
/*{  
   let numero = 5
   console.log(numero)
}*/

function calcular(){
  let numero = 12
}

//calcular()
//numero = 20
console.log(numero)