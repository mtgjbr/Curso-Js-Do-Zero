//Exercício 1 — for clássico
//Crie um array com 5 nomes. Use um for clássico pra exibir no console cada nome junto com sua posição, assim:
const nomes = [ "Mateus","roberto", "alice", "ana", "junior"];


for (let i=0;i<nomes.length;i++){
 console.log(nomes[i]);
}

//Exercício 2 — for of
//Crie um array com 6 números. Use for...of pra percorrer e exibir no console só os números pares.
 const numeros = [1,2,3,4,5,6];
 for ( const num of numeros){ // cria uma variavel que a cada loop asume o valor do numero do array (o literal valor)
    if(num % 2 ===0) //se o resto da divisão for 0 então
    console.log(num);
 }
// com of vem o valor(valor no literal, nao a variavel valor) com in vem o indice

// Exercício 3 — for in
//Crie um objeto com as informações de um carro: marca, modelo, ano e cor. Use for...in pra exibir cada chave e valor assim:

const carro = {marca:"chevrolet",
    modelo:"4 rodas",
    ano:"2020",
    cor:"marrom bombom"
}
for (const chave in carro){ // cria uma variavel que asume a chave que pode ser usada pra pegar um valor ainda mais especifico com carro[chave]
    console.log(chave,carro[chave])
}