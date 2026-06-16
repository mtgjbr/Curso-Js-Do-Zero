// reduzir elementos de um array a um elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// acumulador o valor que se usa pra somar a cada repetição do laço
//const total = numeros.reduce(function(acumulador, valor, indice, array){ //sempre retorna alguma coisa para não retornar undefined
//acumulador += valor; // soma o seu valor a cada volta
//return acumulador

//}, 0 ) //valor inicial que o acumulador vai começar, opcional 

//console.log(total);

const numerosPar = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []) //define o valor deffaut dele como um array vazio
console.log(numerosPar)

//retorne a pessoa mais velha
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Leticia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 76 },
];

const maisVelhas = pessoas.reduce(function(acumulador,valor){
 if(acumulador.idade > valor.idade){ //acumulador começa como o primeiro objeto do array (índice 0), e valor é o próximo elemento a ser comparado.
    return acumulador // se o valor dele for maior do que o do valor (proximo valor), então ele retorna ele mesmo e fica vivo por mais uma repetição, caso contrario o valor assume a posição
 } 
 return valor
});
console.log(maisVelhas)