// sempre o mesmo tamanho do array original, so faz as mudanças requeridas
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// dobrar os numeros

const NumerosEmDobros = numeros.map(valor=>valor*2)
console.log(NumerosEmDobros);
 


const pessoas = [
    {nome:"Luiz", idade:62},
    {nome:"Maria", idade:23},
    {nome:"Eduardo", idade:55},
    {nome:"Leticia", idade:19},
    {nome:"Rosana", idade:32},
    {nome:"Wallace", idade:47},
];

const nome = pessoas.map(obj=>obj.nome);
console.log(nome);
const idades = pessoas.map((valor)=>{
    return {idade:valor.idade}
})

console.log(idades)

const id = pessoas.map((obj,indice)=>{
    const newb = {...obj} // criando um objeto novo pra n mexer no original
    newb.id = indice
   return newb
})
console.log(id)