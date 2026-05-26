// usado para objetos iteraveis

//            01234
const listaNomes = ["Mateus Almeida", "Juliano Gaspar", "Cleber marcos"]

for (let i = 0; i < listaNomes.length;i++){ 
    console.log(listaNomes[i]) // repete o indice no log do console partindo do 0 até o final 
}
console.log('#######');

for (let i in listaNomes){ // a vantagem desse pro of é que ainda pega o indice 
    console.log(listaNomes[i]); // mesma maneira so que for in
}
console.log('#######'); 
for (let valor of listaNomes){ // com of vem o valor(valor no literal, nao a variavel valor) com in vem o indice
    console.log(valor); //vem so o valor
}// não dá pra ser utilizado em objetos pois os mesmo não são iteraveis

console.log('#######');

listaNomes.forEach(function(valor, indice){
    console.log(valor, indice); //outra maneira de se fazer
})

// for clássico - Geralmente com iteráveis ( arrays, strings e objetos)
// for in - Retorna o índice ou a chave ( arrays, strings e objetos)
// for of - Retorna o valor em si ( com iteráveis, arrays ou strings)

