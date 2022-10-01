

function calcularResistor() {
    var faixa1 = document.querySelector(".faixa1").value
    var faixa2 = document.querySelector(".faixa2").value
    var faixa3 = document.querySelector(".faixa3").value
    var multiplicado = document.querySelector(".multiplicador").value
    var tolerancia = document.querySelector(".tolerancia").value
    var b1 = document.querySelector("#b1")
    var resultado = document.querySelector("#resultado")
    //concatenaçao da faixa 1 2 e 3 e converter para number
    var concatenacao = faixa1 + faixa2 + faixa3
    concatenacao = Number(concatenacao)
    //multiplicaçao
    multiplicado = Number(multiplicado);
    var calculo = concatenacao * multiplicado
console.log(calculo)
    //mostrar na tela
    resultado.textContent = `${calculo} em OHM`
}
b1.addEventListener("click", calcularResistor)
