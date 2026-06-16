// filter -> sempre retornar um array com a mesma quantidade de elementos ou menos, de acordo com o filtro escolhido
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//retorne os números maiores que 10;
// deve ser criado um novo array
function callbackFilter(valor){
 return valor > 10; // ou true ou false
// funçãor tem q voltar true pra decidir se ele vai colocar ou nao
    
}

const numerosFiltrados = numeros.filter((valor)=>valor > 10); // função anonima com arrow function
 // ou true ou false
// funçãor tem q voltar true pra decidir se ele vai colocar ou nao
    
 // passa sem os () so para passar a referencia da função, o filter chama por si so
console.log(numerosFiltrados)







const pessoas = [
    {nome:"Luiz", idade:62},
    {nome:"Maria", idade:23},
    {nome:"Eduardo", idade:55},
    {nome:"Leticia", idade:19},
    {nome:"Rosana", idade:32},
    {nome:"Wallace", idade:47},
];

const pessoasComNomeGrande = pessoas.filter((obj)=>obj.nome.length > 5); // tem que ter o .nome.leght pra se referir ao tamanho do atributo nome no obj 
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj=>obj.idade >50); // quando só tem um parametro n precisa de parenteses na arrowfunctions
const NnomeTerminaComA = pessoas.filter(function(obj){
 return obj.nome.toLowerCase().endsWith("a");
})
console.log(pessoasComNomeGrande,"aaa");
console.log(pessoasComMaisDeCinquentaAnos);
console.log(NnomeTerminaComA)