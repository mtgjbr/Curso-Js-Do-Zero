const Login = require('../models/loginModel')

exports.index = (req,res)=>{
    res.render('login')
}

exports.register =async function(req,res){
    try{
          console.log('CHEGOU NO REGISTER')
        const login = new Login(req.body)
        
        await login.register()
        console.log('TERMINOU O REGISTER, ERROS:', login.errors)
        if(login.errors.length>0){
            req.flash('errors',login.errors);
            req.session.save(function(){
                console.log('SESSION SALVA')
                return  res.redirect('/login/index');
            })
            return
             
        }
          req.flash('success','Seu usúario foi criado com sucesso');
            req.session.save(function(){
                return  res.redirect('/login/index');
            })
        
    }catch(e){
        console.log(e)
        res.render('404') //porque nao preciso do caminho completo
    }
}