const express = require ('express');
const route = express.Router(); // ve as rotas e trata ela, mandando para o controler correto
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js')
const contatoController = require('./src/controllers/contatoController.js')


const {loginRequired} = require('./src/middlewares/middlewares.js')

//Rotas da home// passa um pelo outro com next para passar por tds
route.get('/',homeController.index);

//Rotas de Login
route.get('/login/index',loginController.index) // ta usando a class importada
route.post('/login/register',loginController.register) //porque com post:pq ta enviando dados pro servidor
route.post('/login/login',loginController.login);
route.get('/login/logout',loginController.logout);


//rotas de contato
route.get('/contato/index',loginRequired, contatoController.index);
route.post('/contato/register',loginRequired, contatoController.register);
route.get('/contato/index/:id',loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id',loginRequired, contatoController.edit);
route.get('/contato/delete/:id',loginRequired, contatoController.delete);


module.exports = route; //oq seria isso