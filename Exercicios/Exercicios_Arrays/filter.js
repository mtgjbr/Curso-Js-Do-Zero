/**
 * Exercício — filter
Dado esse array, crie dois filtros:

Um com só as pessoas com mais de 25 anos
Um com só as pessoas cujo nome termina com a letra "a" (sem diferenciar maiúscula/minúscula)

js
 */
const pessoas = [
    { nome: "Mateus", idade: 17 },
    { nome: "Julia", idade: 23 },
    { nome: "Pedro", idade: 15 },
    { nome: "Ana", idade: 30 },
    { nome: "LarissA", idade: 28 }
]

const maisdevinteCinco = pessoas.filter((valor)=>{
    if (valor.idade >25)return valor 
})
console.log(maisdevinteCinco)

const nomeTerminaComA = pessoas.filter((valor)=> {
    if (valor.nome.toLowerCase().endsWith("a")){
        return valor
    }
})
console.log(nomeTerminaComA)