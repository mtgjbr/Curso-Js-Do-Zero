
const contato = require('../models/contatoModel')
exports.index = async (req,res,next)=>{
  const contatos = await contato.buscaPorContatos();
  res.render('index',{contatos})
  
  //  console.log(req.session.usuario)
  
     //renderiza o arquivo index
    //ele consegue salvar dados criado em momentos anteriores

}