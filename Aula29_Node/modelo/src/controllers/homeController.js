
exports.paginaInicial = (req,res,next)=>{
    console.log(req.flash('error'),"dango balando")
  //  console.log(req.session.usuario)
    res.render('index',{
       titulo:"este será o titulo",
       numeros:[1,2,3,5,6,7]
    }) //renderiza o arquivo index
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`) //ele consegue salvar dados criado em momentos anteriores
}
exports.testeFlash=(req,res,next)=>{
    req.flash('error', 'Mensagem de teste');
    res.redirect('/'); // importante: redirect, não render
 
}
exports.trataPost=(req,res,next)=>{
res.send(req.body)
}