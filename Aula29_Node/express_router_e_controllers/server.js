// micro frameword que ajuda a trabalhar web

const express = require('express');
const app = express(); 
const routes = require('./routes')


app.use(express.urlencoded({extended:true})) //precisa disso ou vai vir como undefined e nao vai ser tratado
app.use(routes);



app.listen(3000,()=>{
    console.log("Acessa http://localhost:3000")
    console.log("servidor executando na porta 3000")
}); //escuta oq acontecer na porta 3000
