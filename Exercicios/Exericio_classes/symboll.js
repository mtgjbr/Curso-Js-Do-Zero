//  [] é o que faz o JS entender que é uma variável sendo usada como chave, não um nome literal:
/**Crie uma classe ContaBancaria(titular, saldo) onde:

saldo é protegido com Symbol — ninguém acessa diretamente
get saldo — retorna o saldo atual
set saldo — lança TypeError se não for número ou se for negativo
Método depositar(valor) — usa o setter pra adicionar ao saldo
Método sacar(valor) — usa o setter, mas verifica se tem saldo suficiente */

const _saldo = Symbol("jurupinga")


class ContaBancaria{
    constructor(titular,saldo){ //não usar o mesmo nome do Symbol como parâmetro.
        this.titular = titular;
        this[_saldo] = saldo// guarda no Symbol
        // Cada ContaBancaria criada precisa ter seu próprio saldo — o this garante isso.
    }
    get saldo(){
        return this[_saldo]
    }
    set saldo(valor){
        if(typeof valor !== "number") {throw new TypeError("Não é possivel depositar um NAM")}
        if(valor < 0){throw new TypeError ("Não é possivel depositar um valor abaixo de zero")}
        this[_saldo] = valor

    }
    depositar(valor){
     this.saldo += valor
    }
    sacar(valor){
    if(valor>this[_saldo]) { return "não tem saldo suficiente"}
     this.saldo -= valor // o = aciona o set automaticamente
    }

}


const conta = new ContaBancaria("mateus",1200);
console.log(conta.saldo);
conta.saldo = 1;
console.log(conta.saldo);
console.log(conta.sacar(100))