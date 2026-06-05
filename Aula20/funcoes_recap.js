
falaOI();


//declaração de função function hoisting:o motor do js eleva a declaração de função pro topo do JS
function falaOI(){
console.log("oi"); 

}
// funções sao first-Class objects (objetos de primeira classe)
// function expression / tratar funções como dado
const souUMdado = function() { // variavel virou a função
    console.log("sou um dado");
};

souUMdado(); // variavel passou a ser uma função


function executaFuncao(funcao){ // pega a função como parametro
    console.log("vou executar sua função")
    funcao(); // executa a função 
}
executaFuncao(souUMdado); //função que executa a função

// Arrow function 
// function expression so que mais curta

const funcaoArrow = () => { // mesma coisa das funções padroes
    console.log("sou uma arrow function");
};
funcaoArrow();

setInterval (function(){
    // passando outra vez a função como parametro (dado) para outra função
},1000)
 // dentro de um objeto pode ser ter uma função

 const obj = {
    falar(){
        console.log("estou falando")
    }
 }

 obj.falar();