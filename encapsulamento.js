// Pilar - Encapsulamento
/*
class Carro {
  constructor(){
	this.modelo = "Gol"
	this.cor = "Vermelho"
  }
  
  frear(){
	/* freio com tecnologia a disco
	.
	.
	.
	.
	.
	.
	.
	.
	.
    
	console.log("parar o carro")
  }
  
}

const carro = new Carro()
carro.frear()
*/

// Encapsulamento, modificadores de acesso e getters e setter
class ContaBancaria {

	/* 
		Atualmente o javascript não possui os modificadores de acesso tradicionais como
		protected, private e public. Contudo, entre os programadores, definiu-se uma
		boa prática de usar o underline '_' antes de um atributo siginifica que ele é 
		privado e não deve ser acessado diretamente no código, apesar de ser possível,
		mas sim com os getters e setters.
	*/
	constructor() {
		this._numeroConta = 0
		this._saldo = 0
	}

	sacar(valorSaque) {
		this._saldo = this._saldo - valorSaque
	}

	depositar(valorDeposito) {
		this._saldo = this._saldo + valorDeposito
	}

	/*
		Dentro do código os getters e setters são usados como se fossem os atributos
		
		Para chamar o getter: nomeObjeto.funcaoGet -> sem os parênteses, como se fosse
		um atributo

		O setter: nomeObjeto.funcaoSet = novoValor -> como se fosse um atributo
	*/

	get saldo() {
		return this._saldo
	}
	set saldo(novoSaldo) {
		if (novoSaldo > 0) {
			this._saldo = novoSaldo
		}
	}
	get numeroConta() {
		//Verificar se o usuario está logado
		return "Número: " + this._numeroConta
	}
	set numeroConta(numero) {
		if (numero > 0) {
			this._numeroConta = numero
		}
	}

}

const conta = new ContaBancaria()
//conta.numeroConta = 60
//conta.numeroConta = 60
conta.saldo = 500 // segura
conta.sacar(50) //450
conta.depositar(100) //550

console.log(conta.saldo)
