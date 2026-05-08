/**
 * Primitivos (imutaveis) - string , number, boolean, undefined
 * null (bigint, syboll); - valor
 *  variavel é uma caixa que contem o valor 
 * 
 * valores por referências (Mutavel)- Arrys, object, function
 */
let nome = "Luiz";
nome = "Alberto"; // não está mudando o dado, mas sim o valor do dado
nome[0] = "R"; // não funciona pois valores primitivos sao imutaveis
console.log(nome[0])
let nomecopia = nome
console.log(nomecopia, nome)
nome = "junio"
console.log(nomecopia, nome); // quando é feito uma cópia de uma variavel seus valores não estão ligado, a variavel apenas copia uma vez e permanece assim mesmo a original sendo mudada



let a = [1, 2, 3] //passado por referencia, os dois apontam para o mesmo lugar na memoria, logo se um mudar os dois mudam
let b = a;
console.log(a, b)
a.push(4);
console.log(a, b);
b.push(5);
console.log(a, b) // os dois mudam quando um muda
