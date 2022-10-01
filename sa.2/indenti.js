function calcularled(){
//inicio
var r1 = document.querySelector("#r1").value
var r2 = document.querySelector("#r2").value
var r3 = document.querySelector("#r3").value
var font = document.querySelector(".font").value
var b1 = document.querySelector("#b1")
var resultado = document.querySelector("#resultado")
//calculo

var concatenacao = (r3 / 1) + (r2 / 1) * r1
concatenacao = Number(concatenacao)
var calcular = concatenacao / font
//saida
console.log(calcular)
resultado.textContent = "OHM: "+ calcular.toFixed(1)
} 
//criando condição
b1.addEventListener("click", calcularled);