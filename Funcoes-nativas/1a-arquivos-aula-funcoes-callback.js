/*
Funções callback servem normalmente para fazer alguma verificação dentro de uma outra função
São passadas como parâmetros dentro da função
*/

function processar(callbackSucesso, callbackErro){
  
  /*
  ações
  ...
  */
  
  let resultadoProcessamento = true
  if( resultadoProcessamento ){
    callbackSucesso()
  }else{
    callbackErro()
  }
}

const salvarResultado = function(){
  /*
  ...
  */
  console.log("salvar resultado")
}


const erro = function(){
  /*
  ...
  */
  console.log("erro")
}

processar(salvarResultado, erro)