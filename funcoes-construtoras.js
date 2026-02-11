// Funções construtoras
/*
Basicamente uma função construtora é mesma coisa de uma classe
em versões mais antigas do js não exestia ainda 'class' então se fazia classes
utilizando as funções
*/
const Hotel = function () {

  this.nome = "Hotel do Jamilton"
  this.quantidadeSuites = 30
  let suitesOcupadas = 25

  /*
  Ao criar um atributo usando o let encapsula o atributo, ou seja, não é possível
  acessá-lo fora do escopo da função construtora
  */

  this.reservar = function () {
    if (suitesOcupadas < this.quantidadeSuites) {
      suitesOcupadas++
      console.log("ocupadas: " + suitesOcupadas)
    }else{
      console.log("Estamos lotados")
    }
  }

}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()

/*
Alguém até pode tentar acessar o atributo utilizando o mesmo nome, mas dentro do objeto
irá criar um this. e não vai mexer diretamente na variável
*/
hotel.suitesOcupadas = 25 // não mexe na let suitesOcupadas, cria um this.

hotel.reservar()


