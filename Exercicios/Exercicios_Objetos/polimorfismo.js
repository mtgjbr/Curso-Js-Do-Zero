/**Exercício — Polimorfismo
Crie uma classe mãe Funcionario(nome, salario) com o método calcularBonus() que retorna 10% do salário.
Depois crie dois filhos:

Gerente(nome, salario) — bonus de 20%
Diretor(nome, salario) — bonus de 50% */


function Funcionario(nome, salario) {
    this.nome = nome;
    this.salario = salario
}
Funcionario.prototype.calcularbonus = function () {
    let valor = 0.10
    valor = valor * this.salario;
    console.log(valor)

}
function Gerente(nome, salario) {
    Funcionario.call(this, nome, salario) //pega tudo que vai usar do pai
}
Gerente.prototype = Object.create(Funcionario.prototype); //define o prototype do gerente como o mesmo do funcionario
Gerente.prototype.constructor = Gerente; // devolve o proprio endereço

Gerente.prototype.calcularbonus = function () {
    let valor = 0.20;
    valor = valor * this.salario;
    console.log(valor);
}


function Diretor(nome,salario){
    Funcionario.call(this,nome,salario); // desse fnucionario pega o nome e o salario
}
Diretor.prototype = Object.create(Funcionario.prototype);
Diretor.prototype.constructor = Diretor;

Diretor.prototype.calcularbonus = function () {
    let valor = 0.50;
    valor = valor * this.salario;
    console.log(valor);
}


const f1 = new Funcionario("mateus", 3000);
const g1 = new Gerente("julia",5000);
const d1 = new Diretor("pedro", 10000);
f1.calcularbonus();
g1.calcularbonus();
d1.calcularbonus();