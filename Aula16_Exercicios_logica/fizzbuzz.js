//** Escreva uma função que recebe um numero e retorne o seguinte
// número é divisivel por 3 = fizz
// número é divisivel por 5 = buzz
// número é divisil por 3 e por 5 = fizzbuzz
// número Não é divisivel por 3 e 5 = retorna o próprio numero
// checar se o número é realmente um número = retorna o proprio número
// use a função com numeros de 0 a 100 laço de repetição
// */
let num = 0;
 // se o resto de uma divisão por outro for igual a zero então ele é divisivel
function fizzbuzz(num) {
    if (typeof num !== 'number') { // se ele for um não numero então executa // number tem que ser em minusculo
       return num;
    } else if (num % 5 === 0 && num % 3 === 0) {
        return "Fizzbuzz";
    } else if (num % 3 === 0) { // se o resto da divisão por 3 for 0 então ele é fizz
        return"Fizz";
    } else if (num % 5 === 0) {
        return"buzz";
    } 
        return num;
    
}

do {
   console.log(fizzbuzz(num));
    num++
}
while (num <= 100)
