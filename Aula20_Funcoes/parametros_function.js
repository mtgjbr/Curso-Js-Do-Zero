// função definida com a palavra function tem uma variavel especial chamada arguments que sustenta todos os argumentos enviados
function funcao (){ // parametro
 console.log("oie");
 console.log(arguments[0]); //objeto que comporta todos os argumentos recebidos, não funciona em arrows functions
//pegando o que está no indice zero
}
funcao("valor");  // argumento
//mesmo se enviar sem a função pedir ele não vai dar error

function soma (){
    let total = 0;
    for (let argumento of arguments){ //vai pegar todos os numeros no obj arguments
        total+= argumento // atualizando o total de fora
    }
    console.log(total);
}
soma(1,2,3,4,5,6,7);

function letras (a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}
letras(1,2,3,4,5,6,7) // o sete ficou sem lugar mas mesmo assim não deu erro
letras(1,2,3)// os argumentos faltantes ficaram como undefined, mas foram criados


function sominha (a,b = 10,c = 4 ){
   // versão antiga de valor padrao para b b = b|| 0 // se b tiver algum valor vai ser esse valor, se não vai ser 0
    console.log(a+b+c);
}
sominha(2,5);
sominha(2,undefined,20) // para assumir o valor de b como o padrao dele

function objetinho ({nome, sobrenome, idade}){
 console.log(nome,sobrenome,idade);   
}

let obj = ({nome:"mateus", sobrenome:"almeida", idade:20}); // da pra fazer a mesma coisa com array
objetinho(obj);

const conta =function( operador, acumulador , ...numeros){ // pega todo o resto dos argumentos
    for(let numero of numeros){ // a cada volta desse laço, soma esses valores no acumulador
     if (operador=== "+")acumulador += numero;
     if (operador=== "-")acumulador += numero;
     if (operador=== "/")acumulador += numero;
     if (operador=== "*")acumulador += numero;

    }
    console.log(acumulador);
}; // quando a fnução for desse jeito tem que ter ; no final
conta("+",0, 20, 30, 40, 50)