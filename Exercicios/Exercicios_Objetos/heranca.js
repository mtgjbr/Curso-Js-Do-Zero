/**Exercício — Herança
Crie uma função construtora Animal(nome, som) com o método falar() no prototype.
Depois crie Cachorro(nome) que herda de Animal e adiciona:

buscar(objeto) — exibe "Rex foi buscar a bola"*/

function Animal (nome,som){
    this.nome= nome;
    this.som = som;


}
Animal.prototype.falar= function(){
 return `${this.nome} faz ${this.som}`
}
/*
 ele envia os dados pro Animal pra poder usar os métodos do prototype dele. Sem o Animal.call,
 o this.nome e this.som não existiriam no objeto, e os métodos do prototype como falar() que usam this.nome não funcionariam. */

function Veiculo (nome,som){
    Animal.call(this,nome,som);
}

Veiculo.prototype = Object.create(Animal.prototype) // faz o Cachorro herdar os métodos do Animal (falar, descrever, etc)
Veiculo.prototype.constructor = Veiculo  // corrige a referência do construtor que foi perdida na linha acima

Veiculo.prototype.buscar = function(busca){
    return `o ${this.nome} foi buscar ${busca}`
}

const rex = new Veiculo("Rex","au") 

console.log(rex.falar())           // "O Rex faz au"
console.log(rex.buscar("bola"))    // "Rex foi buscar a bola"

