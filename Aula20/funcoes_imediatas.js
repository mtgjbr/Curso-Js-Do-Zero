// IIFE -> imediately invoked function expression
// expressão de função invocada imediatamente
// esse tipo de função não toca o escopo global

(function(idade,peso,altura){
 const sobrenome = "almeida"
 function criaNome(nome){
return nome + " " + sobrenome;
 }
 function falaNome(){
    console.log(criaNome("luiz"));
 }
 falaNome();
 console.log(idade,peso,altura)
})(10,80, 1.80); // cria uma função anonima e ja cria ela, protegendo o escopo global
const nome="alberto"
