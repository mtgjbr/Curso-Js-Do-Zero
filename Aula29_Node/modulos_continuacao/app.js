const cachorro = require('./mod'); //similar ao export defaut
//pode ser qualquer nome
const path = require('path');
const dog = new cachorro('clebinho')
dog.latir()

// ./ pra avançar uma pasta
// ../ pra trás em uma pasta

console.log(path.resolve(__dirname ,"..", "..", "arquivos" , "imagens")); // a partir do caminho atual, volta duas e entra na pasta arquivos e depois na pagina imagens

console.log(__filename); //pra procurar o nome do arquivo
console.log(__dirname) //procurar o nome do diretorio