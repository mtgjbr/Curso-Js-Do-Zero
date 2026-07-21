// micro frameword que ajuda a trabalhar web

const express = require('express');
const app = express(); 
//          CRIAR   LER    ATUALIZAR   APAGAR
// CRUD -> CREATE , READ , UPDATE,     DELETE
//           POST   GET     PUT        DELETE
//http://meusite.com/sobre <- get -> entregue a página /sobre

//rota e funcao com dois parametros requisição e resposta
app.get('/', (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <button type="submit">Enviar</button>
</form>

        `)
});
app.post('/',(req,res)=>{
    res.send("Obrigado por entrar em contato com a gente")
})
app.get('/contato',(req,res)=>{
    res.send("obrigado por entrar em contato com a gente")
})
app.listen(3000,()=>{
    console.log("Acessa http://localhost:3000")
    console.log("servidor executando na porta 3000")
}); //escuta oq acontecer na porta 3000
