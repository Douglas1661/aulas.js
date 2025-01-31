function acaoBotao() {

var val01,val02,resultado,operacao



val01 = prompt("Digite o valor 1:")
operacao = prompt("Qual a operação? + , - , * , /")
val02 = prompt("Digite o valor 2:")


if (operacao == "+") {
resultado = parseInt(val01) + parseInt(val02) 
}
else if (operacao == "-") {
    resultado = parseInt(val01) - parseInt(val02)
}
else if  (operacao == "*"){ 
        resultado = parseInt(val01) * parseInt(val02) 
}    
else if  (operacao == "/"){ 
    resultado = parseInt(val01) / parseInt(val02) 
}       

document.getElementById("paragrafo").innerText = resultado 
}