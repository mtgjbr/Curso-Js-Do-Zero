exports.middlewareGlobal = (req,res,next)=>{
 res.locals.UmavariavelLocal ="este é o valor da variavel local"
 if(req.body &&req.body.cliente){
    console.log(`vi que voce postou ${req.body.cliente}`)
 }
 console.log()
next() //precisa do next pra chamar o proximo)
}

exports.checkCsrfError = (err,req,res,next)=>{
   if(err && err.code === 'EBADCSRFTOKEN'){
       return res.render('404')
   }
}

exports.crfMiddleware = (req,res,next)=>{
   res.locals.csrfToken = req.csrfToken()
   next();
};