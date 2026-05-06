// lista ou coleção de coisas
// assim como as strings, arrays são indexados
const alunos = ["luiz", "maria", "João"]
console.log(alunos[0]);
alunos[0] = "eduardo"; //alteração de um indice 
console.log(alunos); 
alunos[3] = "felipe"; //criação de um indice existente, mas tem que saber quantos elementos tem no array pra poder adicionar
console.log(alunos);
console.log(alunos.length); // começa a contar do 0 e o 4 não existe
alunos.push("rubinho");//adiciona o elemento ao final, n é necessário saber onde tá
alunos.unshift("robinho"); //adiciona no começo do arrary
console.log(alunos)
const removido = alunos.pop(); //remove o ultimo elemento e salva a variavel
const removido1 = alunos.shift();//remove o primeiro elemento e salva a variavel
 delete alunos[1]; //remove no indice escohido sem trocar a ordem
console.log(alunos);
console.log(alunos.slice(0,2)); // fatia a partir de um numero, quando tem - ele pega o numero total e subtrai pela quantidade escolhida
console.log(alunos.slice(-1)); //pega o ultimo elemento
