var nome,nota1,nota2

nome = prompt("Digite o nome:")
nota1 = prompt("Digite nota1:")
nota2 = prompt("Digite nota2:")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 7) 
{ 
    alert("Aprovado" + nome)
}
else
alert("Reprovado" + nome)