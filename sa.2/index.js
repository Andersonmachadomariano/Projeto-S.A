function calcularCircuito() {
    var resistor1 = document.querySelector("#r1").value
    var resistor2 = document.querySelector("#r2").value
    var resistor3 = document.querySelector("#r3").value
    var fonte = document.querySelector("#circuito").value
    var c1 = document.querySelector(".calcular")
    var resultado = document.querySelector("#resultado")
    //calculo

    
     var concatenacao = (resistor1 + resistor2 + resistor3)
    concatenacao = Number(concatenacao)
    //saida
    var calculo = fonte / concatenacao
    //mostrar na tela
    console.log(calculo)
    resultado.textContent = `${calculo} em OHM`
  }
  c1.addEventListener("click", calcularCircuito);
  


//entrada
//circuito paralelo
function calcularCircuito2() {
var r1t1 = document.querySelector("#r1t1").value
var r2t2 = document.querySelector("#r2t2").value
var r3t3 = document.querySelector("#r3t3").value
var font2 = document.querySelector(".font2").value
var c2 = document.querySelector(".calcular")
var resultado2 = document.querySelector("#resultado2")

//calculo do r1, r2 e r3
var concatenacao2 = (r1t1 / 1) * (r2t2 / 1) * (r3t3 / 1)
concatenacao2 = Number(concatenacao2)
//saida
var calculo2 = concatenacao2 / font2
console.log(calculo2)
    //mostrar na tela
    resultado2.textContent = `${calculo2} em OHM`
}
    c2.addEventListener("click", calcularCircuito2)