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

app.use(express.urlencoded({extended:true})) // 1º: lê dados de formulário
//precisa disso ou vai vir como undefined e nao vai ser tratado
app.use(express.static(path.resolve(__dirname,'public')));   // 2º: serve arquivos da pasta public para todos
app.use(express.json())  // 3º: lê dados em JSON
//express.json() lê o corpo da requisição quando vem em formato JSON e transforma em objeto, disponibilizando em req.body — sem ele, req.body fica undefined pra esse tipo de requisição.
//.use serve para triggar os midwares,tudo q for app.use (app é o frameword express) vai ser executado em todas as rotas
app.use(helmet({  // 4º: adiciona headers de segurança
    contentSecurityPolicy: false
}));
// session() cria um sistema de "memória" entre requisições:
//  ele salva dados do usuário (como o ID de quem está logado) no MongoDB, 
// e identifica cada usuário através de um cookie enviado ao navegador — assim o servidor 
// "lembra" quem está logado mesmo em requisições diferentes.

// 5º: ativa sessão do usuário
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
                                // 6º: ativa mensagens temporárias
app.use(flash());

// express.static('public') expõe o CONTEÚDO de public na raiz da URL — a pasta "public" em si não aparece no endereço (ex: public/assets/css/style.css → /assets/css/style.css)

app.set('views',path.resolve(__dirname,'src','views'));
//Esse app.set('views', ...) diz pro Express: "toda vez que alguém chamar res.render(), procure os arquivos dentro dessa pasta". Então o Express já sabe que a "raiz" das views é src/views/. 
//      Por isso você só precisa passar o nome do arquivo ('404'), e ele monta o caminho completo sozinho: src/views/404.ejs.
app.set('view engine', 'ejs');


// rotas de midleware
app.use(csrf()); // 7º: proteção anti-CSRF
app.use(csrfMiddleware)
app.use(checkCsrfError);
app.use(middlewareGlobal) //todas as requisições vao passar aqui
    // por último: só agora vai pra rotas
app.use(routes);

app.on('pronto', ()=>{
    app.listen(3000,()=>{
        console.log("Acessa http://localhost:3000")
        console.log("servidor executando na porta 3000")
    }); //escuta oq acontecer na porta 3000


})

