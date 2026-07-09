// se deixar no package.json e der npm i ele vai buscar todos esses arquivos
import * as MeuModulo from './modulo1' //importa tudo de um modulo especifico
import {nome as nome2,sobren,idade,soma,Pessoa} from './modulo1';
import qualquerNome from './modulo1' // importa o padrao(default do modulo)
// troca os nome do nome para nao dar error
const nome = "Joao"; // erro de colisao se fossem o mesmo nome

console.log(qualquerNome()) //pode ser chamado com qualquer nome, porque ele é o defaut
const p1 = new Pessoa("mateus","almeida");
console.log(p1)
console.log(MeuModulo)
console.log(nome,sobren,idade);
console.log(soma(5,5));



//source map mostra o local onde ta acontecendo o log ou erro, util 

// modulos = arquivos com escopo proprio 
// capaciade de exportar variaveis funções e outros de um modulo

