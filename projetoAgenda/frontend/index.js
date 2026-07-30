import 'core-js/stable';
import 'regenerator-runtime';

const Contato = require('./modules/contato');
import Login from './modules/login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init()


const registra = new Contato('.contato-register')//procura pela class
registra.init()

const edita = new Contato('.contato-edit');
edita.init()
//import './assets/css/style.css'
