
function acaoBotao() {
    var numero,fatorial,contador  //declaração de variavel

    numero = prompt ("Digite um numero para calcular seu fatorial:") //prompit de entrada 
    fatorial = 1 //inicio do contador.
    
    /* para contador de 1 ate numero faca
          fatorial := fatorial * contador
       fimpara
    
       escreval ("O fatorial de ", numero, "é:", fatorial)*/
    
    for (contador = 1; contador <= numero; contador++){
        fatorial = fatorial * contador
    }
    
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é :" + fatorial    
}
