/**
 * Exercício — map
Dado esse array de pessoas, use map para criar dois novos arrays:

Um com só os nomes em letras maiúsculas
Um com os objetos originais mas com um novo atributo maiorDeIdade sendo true ou false
 */

const pessoas = [
    { nome: "Mateus", idade: 17 },
    { nome: "Julia", idade: 23 },
    { nome: "Pedro", idade: 15 },
    { nome: "Ana", idade: 30 }
]

const PessoasM = pessoas.map(valor=>valor.nome.toUpperCase());
const deMaior = pessoas.map((valor)=>{
 const copia = {...valor} // cria uma copia pra n mexer no original
 copia.id = valor.idade >=18 ? "de maior" : "de menor"; // cria um novo atributo no obj ja existente
 return copia
})
console.log(PessoasM)
console.log(deMaior)