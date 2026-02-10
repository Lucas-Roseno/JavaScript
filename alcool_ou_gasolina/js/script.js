function melhorPreco() {

    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value
    let msg

    /*
        Cálculo para saber qual é melhor será:
        se valorAlcool/valorGasolina >= 0.7 é melhor gasolina			
    */

    if (precoAlcool != '') {
        if (precoGasolina != '') {

            let resultado = precoAlcool / precoGasolina
            if (resultado >= 0.7) {
                msg = "Gasolina é melhor"
            } else {
                msg = "Álcool é melhor"
            }

            document.getElementById('resultado').innerHTML = msg

        } else {
            alert("Preencha o campo do gasolina primeiro! ")
        }
    } else {
        alert("Preencha o campo do álcool primeiro!")
    }
}