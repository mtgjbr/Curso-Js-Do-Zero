exports.middlewareGlobal = (req,res,next)=>{
 console.log();
 console.log('Passei no middleware global');
 if(req.body &&req.body.cliente){
    console.log(`vi que voce postou ${req.body.cliente}`)
 }
 console.log()
next() //precisa do next pra chamar o proximo)
}