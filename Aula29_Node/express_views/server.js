// micro frameword que ajuda a trabalhar web

const express = require('express');
const app = express(); 
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({extended:true})) //precisa disso ou vai vir como undefined e nao vai ser tratado
app.use(express.static(path.resolve(__dirname,'public')))
// express.static('public') expõe o CONTEÚDO de public na raiz da URL — a pasta "public" em si não aparece no endereço (ex: public/assets/css/style.css → /assets/css/style.css)

app.set('views',path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs')
app.use(routes);



app.listen(3000,()=>{
    console.log("Acessa http://localhost:3000")
    console.log("servidor executando na porta 3000")
}); //escuta oq acontecer na porta 3000
