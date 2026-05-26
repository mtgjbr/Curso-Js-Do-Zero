const frutas = ['pera', 'maçã', 'uva']  //vetor = array de uma dimensão

/*
for (let i = 0; i<frutas.length; i++){
console.log(frutas[i]);
}
*
* jeito for padrao
*/
for (let indice in frutas){ // le os indices ou chaves(objetos) e percorre ele com base no tamanho
    console.log(frutas[indice])
}


const pessoas = {
 nome:'mateus',
 sobrenome:'almeida',
 idade:20
};
const chave = 'nome' // acessando o nome de dentro da pessoas, outra maneira sem usar o pessoas.nome
console.log(pessoas[chave])
for(let chaves in pessoas){ //passa pelos objetos
    console.log(chaves, pessoas[chaves]); // pega o indice e pega o o tributo 
}