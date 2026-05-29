let erro;
try { // tente executar, caso ocorra um erro joga pro bloco catch
console.log(naoexisto)
} catch(err){ // pega o erro
 console.log("não existo não chefe")
  erro = err; // pra jogar uma variavel pra fora do bloco tem que fazer assim
}

// console.log(erro);
// tratamento de erros

function soma (x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){ // se x ou y não forem numeros então:
        throw new Error ("x e y precisam ser numero") // lança um erro e para a função e joga pro try/catch que ja estava esperando
    }
    return x+y
}

try{
console.log(soma(1,2))
console.log(soma("goiaba",2))
} catch(error){ // quando o erro não é capturado, o Node imprime o "relatório de crash" completo por isos agora ta mais curto
    console.log(error) 
    console.log("alguma coisa mais amigavel pro usuario não ver a mensagem de erro")
}