
//superclasse / classe Mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`saldo insuficiente ${this.saldo}`)
        return
    }
    this.saldo -= valor;
    this.verSaldo()
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function (valor) {
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` +
        ` Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype) // cria um objeto vazio pro prototype e o preenche com o prototype do conta
ContaCorrente.prototype.constructor = ContaCorrente // devolve o endereço de conta corrente para ele
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`saldo insuficiente ${this.saldo}`);
        return
    }
    
    this.saldo -= valor;
    this.verSaldo()
}

function CP(agencia, conta, saldo,) {
    Conta.call(this, agencia, conta, saldo)

}
CP.prototype = Object.create(Conta.prototype); // cria um objeto vazio pro prototype e o preenche com o prototype do conta
CP.prototype.constructor = CP;



const contaC = new ContaCorrente(11, 22, 0, 100);
contaC.depositar(10);
contaC.sacar(100);
