// escreva uma função que recebe dois numeros e retorne o maior deles
const num1 = 1;
const num2 = 100;

function retornaMaior(num1, num2){
    let resultado = num1 > num2 ? num1 : num2; // se o num1 for maior que num2, retorna o num1, caso contraio retorna o num2
    return resultado

}
console.log(retornaMaior(num1,num2));


const max = (num1,num2)=> num1>num2 ?num1:num2; // versão professor

console.log(max(num1,num2))
