// Notação literal OBJETOS:
// Usa-se const para declarar um objeto para ter certeza que a varíavel não vai mudar
// de tipo, por exemplo, ela n vai deixar de ser um objeto para virar uma string
/*
const hotel = {
    quartos: 20,
    ocupados: 7,
    visitantes: 9,
    verificarQuartosLivres : function(){
        return this.quartos - this.ocupados
    }
}

hotel.quartos = 30
hotel['quartos'] = 22
console.log(hotel.verificarQuartosLivres())
*/

// Notação de construtor 
/*
const hotel = new Object()
hotel.quartos = 20 // atribuir novas chaves
hotel.ocupados = 8
hotel.piscinas = 2
delete hotel.piscinas // deletar um atributo
console.log(hotel.piscinas)
hotel.verificarQuartosLivres = function () {
    return this.quartos - this.ocupados
}
console.log(hotel.verificarQuartosLivres())
*/

// CLASSES
class Hotel {
    constructor() { // Utilizado para declarar os atributos, é chamado assim que um 
        //objeto é instanciado
        this.quartos = 10
        this.ocupados = 5
    }

    //Funcões:
    verificarQuartosLivres(){
        return this.quartos - this.ocupados
    }
}

const miniHotel = new Hotel()

console.log(miniHotel.verificarQuartosLivres())