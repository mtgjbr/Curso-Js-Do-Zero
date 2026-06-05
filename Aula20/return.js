// return
// retorna um valor e termina a função

function soma (a,b){
    return(a+b)
}
console.log(soma(2,5))

function soma2(a,b){
    console.log(a+b); // não é o valor, e só ele mostrando no console
}

soma2(5,2);

function criaPessoa(nome,sobrenome){
    return { nome:nome , sobrenome:sobrenome};

}
const p1 = criaPessoa("mateus","almeida");
const p2 = {nome:"joao", sobrenome:'oliveira'}
console.log(p1);

// CLOSURE: a função de dentro lembra do valor da função de fora mesmo quando ja acaba de ser executada

function falaFrase(comeco){
    function falaresto(resto){
       
       return comeco + " " + resto // "comeco" foi memorizado aqui
    }
  
    return falaresto // quando a função é chamada ela retorna a outra função
    
}
const fala = falaFrase("Ola"); // chama a função e guarda o primeiro numero na propriafunção fala resto, a "fala" virou a função fala restos
const resto =fala("mundo!"); 
console.log(resto)

function criaMultiplicador (multiplicador){ // função principal, função factory, ela cria a outra função que recebe o multiplicador e devolve uma nova função mas com o dado do multiplicador guardado
    return function(n){ // cria a função que pega o argumento e multiplica por algo que vaia ser passado no futuro
        return n * multiplicador 
    };
    
}
const duplica = criaMultiplicador(2); /// cria uma função que multiplica o numero pelo numero passado como argumento
const triplica = criaMultiplicador (3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2),triplica(2),quadriplica(2)); // faz as devidas operações com o numero escolhido