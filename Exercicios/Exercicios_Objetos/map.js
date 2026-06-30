/**
 * Exercício — Map
Dado esse array de produtos, crie um Map usando o id como chave e o objeto inteiro como valor. Depois:

Busque e exiba o produto com id 2
Busque e exiba o produto com id 4
 */

const produtos = [
    { id: 1, nome: "Camiseta", preco: 50 },
    { id: 2, nome: "Tênis", preco: 200 },
    { id: 3, nome: "Boné", preco: 35 },
    { id: 4, nome: "Meia", preco: 15 }
]

const Novop = new Map(); // cria um mapa novo
 for(p of produtos){
    const {id} = p; // define uma variavel id com o valor do id
   Novop.set(id,{...p})  // coloca a chave id e o objeto em cada valor
  // cópia independente — mudanças em p não afetam o Map
 }
 console.log(Novop.get(2));
 console.log(Novop.get(4));

 // set settar valores
// criar mapa = new map
// pegar valor get