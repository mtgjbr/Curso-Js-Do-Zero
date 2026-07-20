const mod1 = require('./mod1')//.falanome:pega só o fala nome // pede/requer
const falanome = mod1.falanome;
// const {nome,sobrenome,falaNome} = require('/.mod1');
console.log(mod1) //pega o objeto todo, pode utilizar as coisas do obj normalmente



const {pessoa} = require('./mod1');
const p1 = new pessoa ('luiz');
console.log(p1)