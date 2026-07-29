require('dotenv').config()
const express = require('express');
const app = express(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionString)
.then(()=>{
    console.log('conectei a base de dados')
app.emit('pronto') //manda o sinal que o servidor conectou pra so depois lançar
})
 .catch(e=>console.log(e)) 

 const session = require('express-session');
 const {MongoStore} = require('connect-mongo');
 const flash = require('connect-flash');


const routes = require('./routes')
const path = require('path');
const csrf = require('csurf')
const helmet = require('helmet');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended:true})) //precisa disso ou vai vir como undefined e nao vai ser tratado
app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.json())
//app.use(helmet()); // oq o .use quer dizers
app.use(helmet({
    contentSecurityPolicy: false
}));

const sessionOptions = session({
    secret: "uiuiuii",
    store: MongoStore.create({ 
        mongoUrl: process.env.connectionString 
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

// express.static('public') expõe o CONTEÚDO de public na raiz da URL — a pasta "public" em si não aparece no endereço (ex: public/assets/css/style.css → /assets/css/style.css)

app.set('views',path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');


// rotas de midleware
app.use(csrf());
app.use(csrfMiddleware)
app.use(checkCsrfError);
app.use(middlewareGlobal) //todas as requisições vao passar aqui
app.use(routes);

app.on('pronto', ()=>{
    app.listen(3000,()=>{
        console.log("Acessa http://localhost:3000")
        console.log("servidor executando na porta 3000")
    }); //escuta oq acontecer na porta 3000


})

