exports.paginaInicial = (req,res)=>{
    res.render('index') //renderiza o arquivo index
}

exports.trataPost=(req,res)=>{
res.send("Ei, sou sua nova rota de post")
}