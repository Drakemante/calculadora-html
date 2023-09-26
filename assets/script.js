const display = document.querySelector("input");

function digitar(valor){
    display.value = display.value + valor
}
function limpar () {
    display.value = ""
}
function calcular () {
    display.value = eval (display.value)
}