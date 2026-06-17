/**Exercício — forEach
Dado esse array, use forEach pra exibir cada produto e seu preço, 
e calcule o total no final */

const produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 35 },
    { nome: "Meia", preco: 15 }
]
let totalP = 0;
produtos.forEach((valor)=>{
    console.log(`${valor.nome}-${valor.preco}`)
    totalP += valor.preco;
})
console.log(totalP)