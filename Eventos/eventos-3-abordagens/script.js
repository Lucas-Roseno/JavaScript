function executar(params) {
    console.log("Executou")
}

function executar2(params) {
    console.log("Executou 2")
}

/* 2) Rotinas DOM tradicionais */
//const botao = document.getElementById('botao')
//const botao = document.querySelector('[botao-acao]')
//botao.onclick = executar
//botao.onclick = function(){executar()}




const btn = document.querySelector('[btn-acao]') // desse modo para achar atributos personalizados
// o addEventListener é a abordagem mais utilizada atualmente para tratar eventos
btn.addEventListener('click', function() {
    executar()
    executar2()
})

//Método menos comum
//btn.onclick = executar()
