/**Exercício — getters e setters
Crie uma função construtora Produto(nome, preco) onde:

preco é protegido — só aceita números maiores que 0, se não lança um TypeError
nome é protegido — só aceita strings, se não lança um TypeError */


function Produto (nome,preco){
   
    let nomeT= nome
    let precot= preco
    Object.defineProperty(this,"nome",{
        get:function(){
            return nomeT;
        },
        set:function(valor){
            if(typeof valor !== "string") {
            throw new TypeError ("apenas letras");
            }
            nomeT = valor;
        }
    })
    Object.defineProperty(this,"preco",{
     get:function(){
         return precot
     },
     set:function(valor){
        if(typeof valor !=='number' || valor <= 0) {
            throw new TypeError ("apenas numeros maiores que 0");
            }
            precot = valor;
     }
    })
}

const p1 = new Produto("chocolate",15);
p1.nome = "cafe";
p1.preco = 12;
console.log(p1.nome)
console.log(p1.preco)