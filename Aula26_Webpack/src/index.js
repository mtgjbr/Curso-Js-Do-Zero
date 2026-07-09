// se deixar no package.json e der npm i ele vai buscar todos esses arquivos

const { construct } = require("core-js/features/reflect");
// Ele é uma biblioteca gigantesca cheia de "polyfills" (códigos que ensinam navegadores antigos a entenderem recursos novos do JavaScript).

const nome = "Luiz";
console.log(nome);

//source map mostra o local onde ta acontecendo o log ou erro, util 

// modulos = arquivos com escopo proprio 
// capaciade de exportar variaveis funções e outros de um modulo
const nomea = [1,2,4]

class goiaba{
    constructor(goiaba){
        this.goiaba = goiaba
    }
    
}

let fruta = new goiaba("maça");
console.log(fruta)