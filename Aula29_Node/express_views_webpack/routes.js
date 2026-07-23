const express = require ('express');
const route = express.Router(); // ve as rotas e trata ela, mandando para o controler correto
const homeController = require('./src/controllers/homeController')
const contatocontroller = require('./src/controllers/contatocontroller')

//Rotas da home
route.get('/',homeController.paginaInicial);
route.post('/',homeController.trataPost)

//rotas de contato
route.get('/contato',contatocontroller.paginaInicial)

module.exports = route;