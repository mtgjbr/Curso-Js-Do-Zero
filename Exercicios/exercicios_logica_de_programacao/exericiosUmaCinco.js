// Atividade 1 — Variáveis e operadores
 //Crie um script que recebe o nome do usuário e o ano de nascimento (pode usar variáveis fixas por enquanto), 
 // calcula a idade e exibe no console uma mensagem como: "Olá, Maria! Você tem 25 anos."

 const nome = "mateus almeida";
 const anoNascimento = 2005;
 
 function CalculaData(anoNascimento){
 const  data = new Date();
 const dataAtual =  data.getFullYear();
 const idade =  dataAtual - anoNascimento 
 return idade
 }
 
 console.log(`Olá ${nome}! Você tem ${CalculaData(anoNascimento)} anos.`);


 //Atividade 2 — Condicionais
// Escreva uma função que recebe uma nota (0 a 10) e retorna a situação do aluno: "Reprovado" (nota < 5),
//  "Recuperação" (5 a 6), "Aprovado" (acima de 6). Teste com pelo menos 3 notas diferentes.

const notaAluno = 10;

function RecebeNota(nota){
    if(nota>6){
        console.log("você está aprovado");
    } else if (nota === 5 || nota === 6){
        console.log("você está de recuperação")
    } else 
        console.log("você está reprovado")
}
RecebeNota(notaAluno)

//Atividade 3 — Loop + Array
//Crie um array com 5 frutas. Use um for para percorrer o array e exibir no console apenas as frutas que têm mais de 5 letras.


const frutas = ["goiaba", "uva", "laranja", "pera", "melancia","jaboticaba"]

for (listaF of frutas){
    if(listaF.length>5){
    console.log(listaF)}
    
}




const objHUmano = {
    correr : 12,
    andar :10,
    nadar : 8
}

for (chave in objHUmano){
    console.log(chave, objHUmano[chave]);
}
//Atividade 4 — Função + Math
//Crie uma função sortearNumero(min, max) que retorna um número inteiro aleatório entre os dois valores.
//Chame ela 5 vezes e exiba os resultados no console.
min = 1
max = 50
function randomico( min,max){
    let seila = Math.random() * (max - min + 1) + min;
   seila = Math.floor(seila);
    return seila
}
console.log(randomico(min,max));
console.log(randomico(min,max));
console.log(randomico(min,max));

