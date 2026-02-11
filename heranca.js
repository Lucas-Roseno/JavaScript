// Herança - Reutilização e manutenção
// Classe: Cao Passaro
class Animal {//superclasse - pai

	/*
	É possível passar parâmetros para o construtor para o objeto começar
	com os atribuitos do modo que o usuário quiser
	*/

	constructor(pCor, pTamanho, pPeso) {
		this.cor = pCor
		this.tamanho = pTamanho
		this.peso = pPeso
	}
	correr() {
		console.log("correr")
		console.log("como")
		console.log("um")
		//30 linhas
	}
	dormir() {
		console.log("dormir")
	}
}

// Para se herdar de uma classe, usa-se 'extends nomeClasse'
class Cao extends Animal {//subclase - filha
	/*
	O super() serve para acessar os parametros e métodos da classe pai
	Se for criado um constructor sem o super dentro, o compilador entende que 
	você quer sobreescrever o construtor do pai 
	*/
	constructor(pCor, pTamanho, pPeso, pOrelha) {
		super(pCor, pTamanho, pPeso)
		this.tamanhoOrelha = pOrelha
	}
	correr() {
		super.correr()
		console.log("cao")
		// 5 linhas
	}
	latir() {
		console.log("latir")
	}
}

class Passaro extends Animal {//subclase - filha
	constructor(pCor, pTamanho, pPeso) {
		super(pCor, pTamanho, pPeso)
	}
	correr() {
		super.correr()
		console.log("passaro")
		// 5 linhas
	}
	voar() {
		console.log("voar")
	}
}

class Papagaio extends Passaro {
	constructor(pCor, pTamanho, pPeso, pFalar) {
		super(pCor, pTamanho, pPeso)
		this.sabeFalar = pFalar
	}
	falar() {
		console.log("falar")
	}
}

// Instancia
//const animal = new Animal("Amarelo", 60, 3)

//console.log(animal.tamanho)
//const cao = new Cao("Amarelo", 60, 3, 5)
//console.log(cao.peso)
//const passaro = new Passaro()
const papagaio = new Papagaio("Vermelho", 20, 1, true)
console.log(papagaio.sabeFalar)

//cao.correr()

/*
papagaio.correr() // Animal
papagaio.voar() // Passaro
papagaio.falar() // Papagaio
*/
//cao.correr()
//passaro.correr()
//passaro.voar()
//passaro.cor = "Amarelo"
//console.log( passaro.cor )

/*
cao.correr()
cao.latir()
passaro.correr()
passaro.voar()
*/

