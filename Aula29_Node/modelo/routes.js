const express = require ('express');
const route = express.Router(); // ve as rotas e trata ela, mandando para o controler correto
const homeController = require('./src/controllers/homeController')
const contatocontroller = require('./src/controllers/contatocontroller')

function Meumiddleware(req,res,next){

console.log();
console.log("passei no meu middleware");
console.log()
next()//executa o proximo midleware
}

//Rotas da home// passa um pelo outro com next para passar por tds
route.get('/',Meumiddleware,homeController.paginaInicial);
route.post('/',homeController.trataPost)
route.get('/teste-flash',homeController.testeFlash)
//rotas de contato
route.get('/contato',contatocontroller.paginaInicial)

module.exports = route;