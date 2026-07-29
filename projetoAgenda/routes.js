const express = require ('express');
const route = express.Router(); // ve as rotas e trata ela, mandando para o controler correto
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js')

//Rotas da home// passa um pelo outro com next para passar por tds
route.get('/',homeController.index);

//Rotas de Login
route.get('/login/index',loginController.index) //porque pode omitir qual a pasta que deixou suas coisas em publico
route.post('/login/register',loginController.register)

module.exports = route; //oq seria isso