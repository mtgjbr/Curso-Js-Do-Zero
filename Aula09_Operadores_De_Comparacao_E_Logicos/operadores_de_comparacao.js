/**
 * Operadores de comparação
 *  > Maior que 
 * >= maior que ou igual a 
 * < menor que
 * <= menor que ou igual a
 * = atribuição (não confundir com os outros)
 * == igualdade (checa se dois valores são iguais) - não recomendavel
 * === igualdade estrita (checa se dois valores são iguais em valor e em tipo)
 * != diferente (checa se dois valores são dieferentes) - não recomendado
 * !==diferente estrito (chega se dois valores são diferentes em valor e tipo)
 * 
 */
const comp = 10>5
console.log( comp);
const a= 10
const b= 10
const comp1 = a<=b; //retorna true enquanto uma das duas condições forem verdadeira
console.log(comp1);

const c = "10";
console.log(a == b);
console.log(a ==c); //por isso não é recomendada
console.log (a===c); //type correction

console.log(a!=b); //são diferentes
console.log(a!=c);
console.log(a!==c); //10 é diferente de "10"
