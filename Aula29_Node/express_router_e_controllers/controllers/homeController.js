exports.paginaInicial = (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <button type="submit">Enviar</button>
</form>

        `)
}

exports.trataPost=(req,res)=>{
res.send("Ei, sou sua nova rota de post")
}