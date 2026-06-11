// closure : habilidade que a função tem de acessar seu esocpo lexico
function retornaFuncao(){
    const nome = "luiz"; 
    return function (){ // tem acesso a 3 escopos, o dela , o da mãe e do global
        return nome
    };
}

const funcao = retornaFuncao();
console.log(funcao)
console.log(funcao())