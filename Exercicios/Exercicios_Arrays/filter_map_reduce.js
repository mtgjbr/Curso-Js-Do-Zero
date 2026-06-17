/**
 * Exercício — filter + map + reduce
Dado esse array, em uma única cadeia:

Filtre só os produtos com estoque maior que 0
Dobre o preço de cada um
Some o total de todos os preços
 */
const produtos = [
    { nome: "Camiseta", preco: 50, estoque: 3 },
    { nome: "Tênis", preco: 200, estoque: 0 },
    { nome: "Boné", preco: 35, estoque: 5 },
    { nome: "Meia", preco: 15, estoque: 0 },
    { nome: "Calça", preco: 120, estoque: 2 }
]

// resultado esperado: 410
// (50*2) + (35*2) + (120*2) = 100 + 70 + 240


const prodt = produtos.filter(valor=>valor.estoque>0).map(valor=>valor.preco*2).reduce((ac,valor)=>{ac+= valor 
    return ac},0)

console.log(prodt)