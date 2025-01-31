var nome,nota1,nota2

passol = false 

nome = prompt("Digite o nome:")
nota1 = prompt("Digite nota1:")
nota2 = prompt("Digite nota2:")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 7) 
passol = true
if(passol && media >=7){
    alert("Você está Aprovado" + nome)
}
else
alert("Você está Reprovado" + nome)