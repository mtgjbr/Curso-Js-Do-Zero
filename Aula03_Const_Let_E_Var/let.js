let nome = 'Henrique'; // sempre usar let para declarar variáveis, var é obsoleta e pode causar problemas de escopo


console.log(nome , ' nasceu em 1984.');
console.log('Em 2000 ' , nome , ' conheceu Maria.');
console.log(nome ,'casou-se com Maria em 2012.');
console.log('Maria teve um filho com' , nome , ' em 2015.');
console.log('O filho de ' , nome , 'se chama Eduardo.');

let variavel = 'valor';
console.log(variavel);
// inicializar uma variável é atribuir um valor a ela pela primeira vez, so pode ser inicializada uma vez
// atribuir um valor a uma variável é usar o operador de atribuição (=) para dar um valor a uma variável já declarada
variavel = 'novo valor';
console.log(variavel);

let vazio; // variavel sem valor, undefined
console.log(vazio);
// variaveis não podem ter espaços, acentos, caracteres especiais (exceto _ e $) e não podem começar com números
let nome2 = 'Maria';
console.log(nome2);
//camelCase= CidadeDeSaoPaulo, snake_case = cidade_de_sao_paulo, kebab-case = cidade-de-sao-paulo

let NomeCliente = 'João';
let nomecliente = 'Maria';
console.log(NomeCliente, nomecliente);