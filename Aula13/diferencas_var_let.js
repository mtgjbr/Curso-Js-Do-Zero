const verdadeira = true;
let nome = 'luiz'; // criando uma variavel
var nome2 = "luiz";
  // let tem escopo de bloco {... bloco}
  // var só tem escopo de função
  
  // escopo global
if (verdadeira){
    let nome = "otavio"; // criando outra variavel 
    console.log(nome, nome2);
    
    if (verdadeira){ // bloco aninhando 
     let nome = "Outra coisa"; // outra variavel a parte
     // se ele não encontrar ele vai no bloco maior, ou no escopo global
    console.log(nome);
} //escopo de bloco
} //escopo de bloco
console.log(nome)

// se fosse com var o nome seria redeclarada toda hora, criada dnv e reinicializada
let sobrenome= " jurupinga" // variaveis no escopo global podem ser pega por funções e outros escopo menores
function falaNome(){
    var nomefunc = "Luiz"; // so existe dentro da função
    
    console.log(nomefunc + sobrenome);
}


console.log(abacatudo)  
var abacatudo = "olá"; //eleva a declaração de variaveis, joga tudo la pra cima com var
// com let da erro ao inves disso
falaNome();