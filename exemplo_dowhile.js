function acaoBotao() {
    var sairloop, val01, val02

    do {
        val01 = prompt("Digite valor 1:")
        val02 = prompt("Digite valor 2:")
        document.getElementById("paragrafo").innerText = "Resultado :" + (parseInt(val01)) + (parseInt(val02))

        sairloop = prompt("Deseja sair do programa? S/N")
    }
    while (sairloop == "N")
}