/*Var
   // Seção de Declarações das variáveis

   nome: caracter
   idade,verifica,contador: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreval("Digite quantas vezes devera ser verificado")
   leia(verifica)
   contador :=0

   enquanto contador <= verifica faca
      escreval ("Digite o nome: ")
      leia (nome)

      escreval ("Digite a idade: ")
      leia(idade)

      se idade >18 entao
         escreval ("A pessoa é maior de idade!")
      senao
         escreval ("A pessoa menor de idade!")
      fimse

      contador := contador +1
   fimenquanto*/
function acaoBotao() {


    var nome, idade, verifica, contador

    verifica = prompt("Digite quantas vezes devera ser verificado: ")
    contador = 0


    while (contador < verifica) {
        nome = prompt("Digite o nome: ")
        idade = prompt("Digite a idade: ")
        if (idade < 18)
            document.getElementById("paragrafo").innerText = nome + "Você é de menor!"
        else
            document.getElementById("paragrafo").innerText = nome + "Você é de maior!"

        contador ++
    }
}
