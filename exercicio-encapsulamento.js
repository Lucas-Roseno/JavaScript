class Transacao {
    constructor(parameters) {
        this._valor = 0
    }

    get valor(){
        return `R$${this._valor}`
    }

    set valor(novoValor){
        if (novoValor > 0) {
            this._valor = novoValor
        }else{
            console.log("Erro: valor inválido")
        }
    }
}

const compra = new Transacao();
compra.valor = 50; // Passa pelo Setter
console.log(compra.valor); // Passa pelo Getter -> Deve exibir "R$ 50"

compra.valor = -20; // Setter bloqueia e avisa erro
console.log(compra.valor); // Getter -> Deve continuar "R$ 50"