/* Aritméticos 
 *
 * + Adição/concatenação
 * ** potênciação
 * - subtração
 * / divisão 
 * * multiplicação
 * % resto da divisão
 * 
 * 
*/  

const num1= 5;
const num2 = 10;
const num3= "10";
 console.log(num1+num2);
 console.log(num1+num3);
 console.log(num1*num2);
 console.log(num1%num2);
 console.log((num1*num2)+num1);

/**
 *  incremento ++
 *  decremento --
 * 
 * 
 */

 let contador = 1;
 contador++; // incremento / primeiro faz a conta
 ++contador; // primeiro executa a ação e depois faz o incremento do valor
 console.log(contador);
 console.log(contador++);
 console.log(++contador);
 contador-- //decremento
console.log(contador);


/*
* operadores de atribuição
* *=
* +=
  /=
  -=
  **=
  *=
  ex: x= x+y é o mesmo de x+=y
*/


let passos = 2
const step = 2;
passos += step; //passos = passos + estep ou passos= passos + 2
console.log(passos);


/**
 *  converter dados como string para número
 *  parsefloat(x)
 *  parseint(x)
 *  number(x)
 */
const numeros= parseFloat(10);
 const numero = parseFloat(1.5);
 console.log(numeros+numero);