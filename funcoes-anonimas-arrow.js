/* + Função literal
	Modo tradicional, já sei como funciona,
	Vantagem: pode chamar a função antes de ser declarada no código, o compilador
	busca ela onde estiver

function somar(a,b){
  console.log(a+b)
}
somar(1,2)
*/

/*+ Função anônima (sem nome)
	Atribui a função a uma variável, te obriga a declarar antes de chamar

const somar = function(a,b){
  console.log(a+b)
}
somar(1, 2)
*/


//+ Função arrow ( seta )
/*	
	Não precisa escrever function
const somar = (a,b) => {
  console.log(a+b)
}
somar(1,2)
*/


//+ Função arrow ( retorno implícito )
//	Geralmente para funções pequenas de uma linha
const somar = (a,b) => console.log(a+b)
//const exibir = n => console.log("nome: " + n)
// const somar = (a, b) => a + b
//exibir("teste")
let resultado = somar(1, 2)
// console.log(resultado)
