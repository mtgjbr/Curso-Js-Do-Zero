let num1 = 10;
let num2 = 2.5;

console.log(num1.toString()+num2); //convertendo numero para string para assim concatenar
console.log(typeof num1); // conversão temporaria, volta a ser number

let num3 = 10;
 num3 = num3.toString(); //agora virou uma string
console.log(num1.toString(2)); // representa o número em binário


let num4 = 1.342456
console.log(num4.toFixed(2)); //aredonda para 2 casas decimais

console.log(Number.isInteger(num1)); // confere se o numero é inteiro
let temp = num1 * "Ola";
console.log(Number.isNaN(temp)); // ele retorna verdadeiro se for um a not a number 


let num5 = 0.7
let num6 = 0.1
let num7 = num5 + num6
console.log(num5 + num6); // imprecisão 
console.log(Number(num7.toFixed(2))); //corrigido
