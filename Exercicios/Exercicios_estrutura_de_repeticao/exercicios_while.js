//Exercício 1 — continue + desestruturação
//Dado esse array, percorra com for...of, desestruture cada objeto e pule os produtos sem estoque com continue. Exiba os que têm estoque:
const produtos = [
    { nome: "Camiseta", estoque: 10 },
    { nome: "Tênis", estoque: 0 },
    { nome: "Boné", estoque: 5 },
    { nome: "Meia", estoque: 0 },
    { nome: "Calça", estoque: 3 }
]

for (let itens of produtos){
  //  for (const { nome, estoque } of produtos) { outra maneira de se fazer
    let {nome,estoque} = itens;
    if (estoque === 0) continue
    console.log(nome,estoque)
}
//Exercício 2 — while
//Crie um jogo simples de adivinhar número. Sorteie um número entre 1 e 10 e use while pra ficar repetindo até sortear o número 7.
//Conte quantas tentativas foram necessárias e exiba no final:
const max = 10
const min = 1

 
 let contador = 1; // fora do loop pra nao resetar a cada vez
do{ // exucutando primeiro porque mesmo se cair 7 de primeira ainda executa uma vez
  rand = Math.floor(Math.random() * (max - min + 1)) + min;
 contador ++;
}
 while(rand !== 7){
 
}
console.log(`demorou ${contador} tentativas para chegar ao resultado`)


//Percorre com for...of
//Desestruture nome e nota com valor padrão 0 pra quem não tem nota
//Se nota menor que 5, exibe "Julia - Pulado" e usa continue
//Senão exibe "Aprovado" ou "Reprovado" (>= 6 aprovado)
const alunos = [
    { nome: "Mateus", nota: 8 },
    { nome: "Julia", nota: 4 },
    { nome: "Roberto", nota: 6 },
    { nome: "Ana", nota: 9 },
    { nome: "Pedro" }  // sem nota
]

for (aluno of alunos){ //pega cada objeto
 let {nome,nota=0} = aluno
 if (nota < 5){
  console.log(`${nome} pulado`)
continue} // pula essa aluna e parte para proxima repetição
 if (nota < 6 ){console.log(`${nome}, reprovado`)}
 if (nota >6) {console.log(`${nome}, aprovado`)}
}