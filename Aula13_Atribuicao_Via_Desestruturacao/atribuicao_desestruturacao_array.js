//               0  1  2  3  4  5  6  7  8  9  indice, representa o valor que ta na posição
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 0] //valor
const primeiroNumero = numeros[0]; //pega o primeiro indice 

const [um,dois,tres, ,cinco ,...resto] = numeros; //cria duas const e defini que o valor delas vao ser referente aos indices 0 e 1
// ... e o nome da variavel para pegar o resto
// da pra pular valores com espaços vazios ,,
console.log(um,dois,tres,cinco, resto);  



console.log(numeros[0]);

const numerico = [
//indice 0 
//sub 0  1  2  
     [1, 2, 3],
// indice 1
//sub 0  1  2
     [4, 5, 6],
//indice 2
//sub 0  1  2
     [7, 8, 9]
];
const [, [ , ,  seis]] =numerico //mesma coisa, ignora o indice 0, pega no indice 1 o 2 indice
console.log(numerico[1][2]); // procura o indice no indice geral 1 e o sub 2
console.log(seis);
// passando um Array geral e extrai um atributo especifico
const [lista1,lista2,lista3] = numerico; //cria variaveis que vao receber o valor que vai ta na determinada posição do array
console.log(lista2[2]);