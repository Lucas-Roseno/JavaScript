/**
 * Código antigo:
 * var aluno = { nome: "Carlos", nota: 8 };

function verificarAprovacao(aluno) {
    var resultado;
    if (aluno.nota >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    
    return "O aluno " + aluno.nome + " teve nota " + aluno.nota + " e foi: " + resultado;
}

console.log(verificarAprovacao(aluno));
 */

let aluno = { nome: "Carlos", nota: 5 }

const verificarAprovacao = (aluno) => {
    let resultado = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'
    
    return `O aluno ${aluno.nome} teve nota ${aluno.nota} e foi ${resultado}`
}

console.log(verificarAprovacao(aluno))