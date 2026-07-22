// micro frameword que ajuda a trabalhar web

const express = require('express');
const app = express(); 

app.use(express.urlencoded({extended:true})) //precisa disso ou vai vir como undefined e nao vai ser tratado

//            parametro / query string 
  // /profiles/12345?campanha=googleads&nome_campanha=seila
  // parametro ajuda a modificar a rota
  // query strings é outro tipo de parametro inciado com ? e se tiver mais de uma coloca &
  

app.get('/', (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <button type="submit">Enviar</button>
</form>

        `)
});
app.get('/testes{/:idUsuarios}{/:jurupinba}',(req,res)=>{ // o {} define o parametro como opcional , req == parametro
    console.log("oi");
    console.log(req.query); // envia do query 
    res.send(`${req.params.jurupinba} ${req.params.idUsuarios} ${req.query.idade}` );
}) // acessar os parametros é com req

app.post('/',(req,res)=>{ 
    //req.params = das partes que vem da rota da url:profile/3
    ///req.querystring = usa chaves :profile/chave1=valor&&chave2=valor2
    // req.body = utilizado no envio do formulario,vem na requisição do body
    console.log(req.params); 
    res.send(`o que voce me enviou foi ${req.body.nome}`) // esse nome é do name 
})

app.listen(3000,()=>{
    console.log("Acessa http://localhost:3000")
    console.log("servidor executando na porta 3000")
}); //escuta oq acontecer na porta 3000
