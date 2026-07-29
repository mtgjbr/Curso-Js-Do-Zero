
exports.index = (req,res,next)=>{
    console.log(req.flash('error'),"dango balando")
  //  console.log(req.session.usuario)
    res.render('index',{
       titulo:"este será o titulo",
       numeros:[1,2,3,5,6,7]
    }) //renderiza o arquivo index
    //ele consegue salvar dados criado em momentos anteriores
}