
exports.paginaInicial = (req,res,next)=>{
    res.render('index') //renderiza o arquivo index
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`) //ele consegue salvar dados criado em momentos anteriores
}

exports.trataPost=(req,res,next)=>{
res.send(req.body)
}