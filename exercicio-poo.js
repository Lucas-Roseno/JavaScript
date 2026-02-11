class Personagem {
    constructor(nome, vida) {
        this.nome = nome
        this.vida = vida
    }
    
    atacar(){
        console.log('O personagem atacou')
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida)
        this.arma = arma
    }

    atacar(){
        console.log(`O guerreiro ${this.nome} atacou com sua ${this.arma}!`)
    }
}

class Mago extends Personagem {
    constructor(nome, vida, magia) {
        super(nome, vida)
        this.magia = magia
    }

    atacar(){
        console.log(`O mago ${this.nome} lançou uma magia com ${this.magia} de poder!`)
    }
}

const guerreiro = new Guerreiro('Lucas Bointão', 100, 'espadão da morte')
guerreiro.atacar()


const mago = new Mago('Nerdola', 1, 4)
mago.atacar()

