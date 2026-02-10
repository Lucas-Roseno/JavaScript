/*
    O operador ternário trata-se do '?' é simplesmente um if simplificado
    Do lado direito do ? se coloca a verificação que se dejesa
    Do lado esquerdo dele se coloca um caso de verdade e um de falso seperados por ':'
    o caso de verdade sempre deve vir primeiro. Ex:

    'verificação lógica' ? 'resultado igual a true' ; 'resultado igual a false'
 */
let idade = 18
let resultado

idade >= 18 ? resultado = "Maior de idade" : resultado = "Menor de idade"

console.log(resultado)