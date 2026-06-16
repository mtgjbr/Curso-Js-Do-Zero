//               0           1       2          3         4         5
const nomes = ["eduardo", "maria", "joana", "roberto", "junior", "Alice"];
nomes[2] = "joao"; //altera o nome do indice 2 para joao
delete nomes[1];
console.log(nomes);
// funciona com string,objetos,numeros etc
const nomeadoo = new Array ("eduardo", "maria", "joana");//usando o construtor de array 

// array são valores por referencia, o que acontecer com um impacta ao outro
const novo = nomes;
const novidade = [...nomes] // cria uma copia separada
const removido =novo.pop(); // remove da copia e joga no removido
// .pop() remove do final e .shift() remove do inicio - menos utilizado
// .push() adiciona ao final e .unshift() adiciona ao incio - menos utilizado
const fatiado = nomes.slice(1,3) // pega o que ta do indice 1 ao 3 ( sempre termina no indice antes)
console.log(fatiado, "sou o fatiado");
console.log(nomes);
console.log(novidade);
console.log(removido);


console.log("---------------");
const palavra = "mateus almeida santos";
let palavras = palavra.split (" ") // separa os elementos da string por espaços
console.log(palavras)
 palavras = palavras.join (" ");
console.log(palavras) // tranforma o array de volta para uma string