// É como se a função filha carregasse uma mochila com as variáveis da mãe. 
// Mesmo a mãe tendo terminado, a filha ainda tem a mochila com o nome dentro.
/**
 * Crie uma função criaSaudacao(saudacao) que retorna outra função. Essa função retornada recebe um nome e exibe a saudação completa:
Usa pra proteger dados (como o saldo da conta que ninguém acessa direto) e pra criar funções especializadas 
(como o criaSaudacao que guarda a saudação e aceita qualquer nome).
 * 
 * 
 */



function criaSaudacao(saudacao){
     return function(nome){
      console.log(saudacao + " "+ nome)
     }
}

const BomDia = criaSaudacao("bom dia");
const boaTarde = criaSaudacao("boa tarde");
const boaNoite = criaSaudacao("Boa noite");
BomDia("mateus");
boaTarde("julia");
boaNoite("Pedro");

/**
 * Exercício — Criador de contas bancárias
Crie uma função criaConta(titular) que retorna um objeto com 3 métodos:

depositar(valor) — adiciona ao saldo
sacar(valor) — subtrai do saldo, mas exibe "Saldo insuficiente" se não tiver saldo suficiente
verSaldo() — exibe "Titular: Mateus | Saldo: R$500"
 */

function criaConta(titular){
    let saldo=0; // se deixar como "" ele vai somar com o numero e vai dar nan
    return {depositar:function(dinheiro){ saldo += dinheiro},
            sacar:function(dinheiro){
                if(saldo - dinheiro < 0){console.log("saldo insuficiente")
                     return}
                saldo -= dinheiro},
            versaldo:function(){console.log(`titular :${titular} | saldo:${saldo}`)}
        
                        }
}

const conta = criaConta('mateus');
conta.depositar(500);
conta.versaldo();
conta.sacar(900);
conta.versaldo()